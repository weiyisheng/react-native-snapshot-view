//
//  CpntToImageView.m
//  AwesomeProject
//
//  Created by gemini on 10/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTShooterBridge.h"

#import "RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RCTSnapShot, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(shoot, int)

RCT_EXPORT_VIEW_PROPERTY(fileName, NSString)

RCT_EXPORT_VIEW_PROPERTY(onShooted, RCTDirectEventBlock)

@end

