//
//  RNCptToImageManager.swift
//  AwesomeProject
//
//  Created by gemini on 10/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation

@objc(RCTSnapShot)
class RCTShooterManager: RCTViewManager{
  
  override func view() -> RCTShooterView {
    return RCTShooterView()
  }
  
}
