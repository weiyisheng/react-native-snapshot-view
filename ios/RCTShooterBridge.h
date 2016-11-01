//
//  RCTCpntToImageView.h
//  AwesomeProject
//
//  Created by gemini on 10/12/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RCTView.h"

#import "RCTBridgeModule.h"

@interface RCTShooterBridge : RCTView

@property (nonatomic, assign) int *shoot;

@property (nonatomic, assign) NSString *fileName;

@property (nonatomic, assign) RCTDirectEventBlock onShoot;

@end
