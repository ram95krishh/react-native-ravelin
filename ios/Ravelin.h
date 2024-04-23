
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRavelinSpec.h"

@interface Ravelin : NSObject <NativeRavelinSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Ravelin : NSObject <RCTBridgeModule>
#endif

@end
