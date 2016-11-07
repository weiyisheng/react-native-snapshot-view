package com.cn.weiyisheng.snapshot;

import android.content.Context;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.views.view.ReactViewGroup;

import java.io.File;
import java.io.FileOutputStream;

/**
 * Created by germini on 10/27/16.
 */

public class SnapShotView extends ReactViewGroup {

    private int shotNumber = -1;
    private String fileName = "not set a file name";
    private Context mContext;

    public SnapShotView(Context context) {
        super(context);
        mContext = context;
    }

    private String getRealPathFromURI(Uri uri) {
        String result;
        String[] projection = {MediaStore.Images.Media.DATA};
        Cursor cursor = mContext.getContentResolver().query(uri, projection, null, null, null);
        if (cursor == null) { // Source is Dropbox or other similar local file path
            result = uri.getPath();
        } else {
            cursor.moveToFirst();
            int idx = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
            result = cursor.getString(idx);
            cursor.close();
        }
        return result;
    }

    private void sendPath(String path) {
        WritableMap event = Arguments.createMap();
        event.putString("filePath", path);
        ReactContext reactContext = (ReactContext) getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "topChange",
                event);
    }

    private void generateImage(final String imageType) {
        final SnapShotView that = this;
        new Thread(new Runnable() {
            @Override
            public void run() {
                Bitmap image = Bitmap.createBitmap(
                        that.getWidth(),
                        that.getHeight(),
                        Bitmap.Config.RGB_565);

                that.draw(new Canvas(image));

                try {
                    String path = Environment.getExternalStorageDirectory().toString();

                    String imageName = "";
                    if (imageType.equals("png")) {
                        imageName = that.fileName.equals("not set a file name") ? "SnapShotView.png" : (that.fileName + ".png");
                        File imageFile = new File(path, imageName);
                        FileOutputStream out = new FileOutputStream(imageFile);
                        image.compress(Bitmap.CompressFormat.PNG, 90, out);
                    }

                    String filePath = "file://" + path + "/" + imageName;
                    that.sendPath(filePath);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }

    public void setShotNumber(int shoot) {
        if (this.shotNumber == -1) {
            //do nothing
        } else {
            this.generateImage("png");
        }

        this.shotNumber = shoot;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

}
