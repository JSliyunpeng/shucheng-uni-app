if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/cl-tabs/cl-tabs?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-card/uni-card?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-status-bar/uni-status-bar?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-nav-bar/uni-nav-bar?hash=39fd6f20ab8270515cfb5717f82056860d67278c');
require('../../pages/news/news?hash=346366c7e5c25857629db2d11c70194b7a47d982');
require('../../pages/bookshelf/bookshelf?hash=57f163bfc0512e187bc203ae92656c7a1ba9e313');
require('../../pages/find/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/index/index?hash=af30089a14de5bba22f51cbb6b3d48bc536087f6');
require('../../pages/my/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}