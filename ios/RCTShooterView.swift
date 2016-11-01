//
//  RNCptToImageView.swift
//  AwesomeProject
//
//  Created by gemini on 10/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation

extension UIImage {
  convenience init(view: UIView) {
    UIGraphicsBeginImageContextWithOptions(view.bounds.size, true, 0)
    view.drawHierarchy(in: view.bounds, afterScreenUpdates: true)
    let image = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    self.init(cgImage: image!.cgImage!)
  }
}

@objc(RCTShooterView)
class RCTShooterView: UIView {
  
  var shootNum: Int = -1
  
  var onShootedCallback: RCTDirectEventBlock!
  
  var cusFileName: String = "not set file name"
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.frame = frame
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func getDocumentsDirectory() -> URL {
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    let documentsDirectory = paths[0]
    return documentsDirectory
  }
  
  func generatePNG() -> Void {
    let image = UIImage(view: self)
    let imageData = UIImagePNGRepresentation(image)
    var fileName = self.cusFileName + ".png"
    if fileName == "not set file name" {
      let timestamp = Date().timeIntervalSince1970
      fileName = String(timestamp) + ".png"
    }
    let filePath = getDocumentsDirectory().appendingPathComponent(fileName)
    do {
      try imageData?.write(to: filePath)
    } catch let err as NSError {
      print("error in generating .......", err)
    }
    if onShootedCallback != nil {
      onShootedCallback(["filePath": filePath.absoluteString])
    }
  }
  
  @objc(setFileName:)
  func setFileName(fileName: String) -> Void {
    cusFileName = fileName
  }
  
  @objc(setShoot:)
  func setShoot(shoot: Int) {
    if shootNum == -1 {
      shootNum = shoot
    } else {
      if shoot > shootNum {
        generatePNG()
        shootNum = shoot
      }
    }
  }
  
  @objc(setOnShooted:)
  func setOnShooted(onShooted: @escaping RCTDirectEventBlock) {
    onShootedCallback = onShooted
  }
  
  
}

