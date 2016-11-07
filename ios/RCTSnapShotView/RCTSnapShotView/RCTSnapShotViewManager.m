//
//  RCTSnapShotViewManager.m
//  RCTSnapShotView
//
//  Created by gemini on 11/4/16.
//  Copyright © 2016 gemini. All rights reserved.
//

#import "RCTSnapShotViewManager.h"

#import "RCTSnapShotView.h"

@implementation RCTSnapShotViewManager

- (UIView *)view
{
    return [[RCTSnapShotView alloc] init];
}

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(shotNumber, int)

RCT_EXPORT_VIEW_PROPERTY(fileName, NSString)

RCT_EXPORT_VIEW_PROPERTY(onShoted, RCTDirectEventBlock)

@end
