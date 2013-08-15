/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "TestCamViewProxy.h"
#import "TiApp.h"
#import "CustomViewController.h"

@implementation TestCamViewProxy

-(void)_destroy
{
	[super _destroy];
}

- (void)open:(id)args
{
    ENSURE_UI_THREAD(open, args);
    
    CustomViewController *viewController = [[CustomViewController alloc] initWithNibName:@"CustomViewController" bundle:nil];
    
    UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:viewController];
    
    [[TiApp app] showModalController:navigationController animated:YES];
}

@end
