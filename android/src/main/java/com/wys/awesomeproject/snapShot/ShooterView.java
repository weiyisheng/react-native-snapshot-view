package com.wys.awesomeproject.snapShot;

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

public class ShooterView extends ReactViewGroup {

    private int shoot = -1;
    private Context mContext;

    public ShooterView(Context context) {
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

    public void setShoot(int shoot) {
        if(this.shoot == -1) {
            this.shoot = shoot;
        } else {

            Bitmap image = Bitmap.createBitmap(
                    this.getWidth(),
                    this.getHeight(),
                    Bitmap.Config.RGB_565);

            this.draw(new Canvas(image));

            try {
                String path = Environment.getExternalStorageDirectory().toString();
                File imageFile = new File(path, "ssss.png");
                FileOutputStream out = new FileOutputStream(imageFile);
                boolean success = image.compress(Bitmap.CompressFormat.PNG, 90, out);
                String filePath = path + "/ssss.png";
                this.sendPath(filePath);
                this.shoot = shoot;
            } catch (Exception e) {
                e.printStackTrace();
            }


        }
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

}
