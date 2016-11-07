//
//  RCTSnapShotView.m
//  RCTSnapShotView
//
//  Created by gemini on 11/4/16.
//  Copyright © 2016 gemini. All rights reserved.
//

#import "RCTSnapShotView.h"

@implementation RCTSnapShotView

{
    int shotNumber;
    
    RCTDirectEventBlock onShoted;
}


/*
 // Only override drawRect: if you perform custom drawing.
 // An empty implementation adversely affects performance during animation.
 - (void)drawRect:(CGRect)rect {
 // Drawing code
 }
 */

- (NSString *)getFilePath
{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    
    NSString *picName = @"RCTSnapShot.png";
    
    if(_fileName != nil) {
        picName = [_fileName stringByAppendingString:@".png"];
    }
    
    NSString *strPath = [documentsDirectory stringByAppendingPathComponent: picName];
    
    return strPath;
}

- (void)sendFailed
{
    if(_onShoted != nil) {
        NSDictionary *events = [[NSDictionary alloc] initWithObjects:@[@"generate image failed !"] forKeys:@[@"error"]];
        _onShoted(events);
    }
}

- (void)sendResult:(NSString *)filePath
{
    if(_onShoted != nil) {
        NSDictionary *events = [[NSDictionary alloc] initWithObjects:@[filePath] forKeys:@[@"filePath"]];
        _onShoted(events);
    }
}

-(void)generate:(NSString *)type
{
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        UIGraphicsBeginImageContext(self.frame.size);
        [self.layer renderInContext:UIGraphicsGetCurrentContext()];
        UIImage *viewImage = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();
        //type default PNG
        NSData *data = UIImagePNGRepresentation(viewImage);
        
        if([type isEqual: @"JPG"]) {
            //TODO JPG
        }
        
        NSString *filePath = [self getFilePath];
        BOOL success = [data writeToFile:filePath atomically:YES];
        
        if (success) {
            [self sendResult:filePath];
        } else {
            [self sendFailed];
        }
    });
}

- (void)generatePng
{
    [self generate:@"PNG"];
}

- (void)setShotNumber:(int)shotNum
{
    _shotNumber = shotNum;
    
    if (_shotNumber > 0) {
        if(_onShoted != nil) {
            [self generatePng];
        }
    }
}

- (void)setFileName:(NSString *)name
{
    _fileName = name;
}

- (void)setOnShoted:(RCTDirectEventBlock)onShotedCallback
{
    _onShoted = onShotedCallback;
}

@end

