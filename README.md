# react-native-snapshot-view


A component can generate to image (.png only now) for ios + android.


##Install
```npm install react-native-image-picker@latest --save```

##Link
###ios
  1.In the XCode's "Project navigator", right click on your project's Libraries folder ➜ `Add Files to <...>`<br>
  2.Go to `node_modules` ➜ `react-native-snapshot-view` ➜ `ios` ➜ `RCTSnapShotView` ➜ select `RCTSnapShotView.xcodeproj`<br>
  3.Add `RCTSnapShotView.a` to `Build Phases -> Link Binary With Libraries`<br>
  4.Compile and have fun<br>
###android
  ```gradle
  //file: android/settings.gradle
  ...
  
  include ':react-native-snapshot-view'
  project(':react-native-snapshot-view').projectDir = new File(settingsDir, '../node_modules/react-native-snapshot-view/android/app')
  ```
  ```gradle
  //file: android/app/build.gradle
  dependencies {
    ...
    compile project(':react-native-snapshot-view')
  }
  ```
  ```java
  // file: android/app/src/main/java/com/<...>/MainApplication.java
  ...

  import com.cn.weiyisheng.snapshot.SnapShotViewPackage; // <-- add this import

    public class MainApplication extends Application implements ReactApplication {
        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new SnapShotViewPackage() // <-- add this line
            );
        }
    ...
  }
  ```
##Usage
  ```javascript
  import SnapShotView from 'react-native-snapshot-view'
  
  <TouchableOpacity 
    onPress={() => {
      const shootNum = this.state.shootNum + 1
      this.setState({
        shootNum
      })
   }}>
   </TouchableOpacity>
  
  <SnapShotView
    fileName={"MyImage"}
    shotNumber={this.state.shootNum}
    onShoted={events => {
      console.log(' onShoted : ', events.nativeEvent.filePath); // filePath is the .png path
    }}
    style={...}>
    {YOUR CHILDREN}
  </SnapShotView>
  ```
  `SnapShotView` will generate one `MyImage.png` when you touch `TouchableOpacity (onPress func)`, and you can get `MyImage.png filePath` at `SnapShotView onShoted` callback.

##Note
I have not used this library in any production yet, that means this library may have some bugs and lack of ability. So, issues and advices wanted.
