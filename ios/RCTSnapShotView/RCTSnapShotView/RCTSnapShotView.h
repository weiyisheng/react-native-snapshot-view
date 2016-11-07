//
//  RCTSnapShotView.h
//  RCTSnapShotView
//
//  Created by gemini on 11/4/16.
//  Copyright © 2016 gemini. All rights reserved.
//

#import "RCTView.h"

@interface RCTSnapShotView : RCTView

@property (nonatomic, assign) int shotNumber;

@property (nonatomic, strong) NSString *fileName;

@property (nonatomic, copy) RCTDirectEventBlock onShoted;

@end
