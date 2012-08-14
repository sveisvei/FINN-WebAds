# DataCollector


// Example code by Rune Maurtvedt - (c) FINN.no 2012


var ldr: Loader = new Loader();

//ldr.contentLoaderInfo.addEventListener(Event.COMPLETE, imgLoaded);
this.loaderInfo.addEventListener(Event.COMPLETE, flashLoadComplete);


function flashLoadComplete(myEvent: Event) {
  // Fetching areaId from parameteres provided by the ad delivery system
  // For a complete list of available parameters please contact trafikk@finn.no
  //var areaId:String = root.loaderInfo.parameters.areaId as String;
  //var areaId:String = '20045';
  /* if (ExternalInterface.available) {
    
    try {
      
      // Calling JavaScript API for rotation banners 
      // Parameters 1: organisationId and 2: areaId
      // Returns a JSON object containing data for presentation
      // For a complete description of the API please contact trafikk@finn.no
      
        
      
      
      
      var jsonResult:Object = new Object();
      jsonResult = ExternalInterface.call("banner.plugin('getBannerAdData', {'customer': 1, 'area': 1})") as Object;
      //var imgUrl = jsonResult.mainImage as String;
      // Fetching one of the images in the result
      /* var req:URLRequest = new URLRequest(imgUrl);   
      this.ldr.load(req); 
      */

  /*if (jsonResult != null)
      {
        address.text = address.text + "Not null ";
        //address.text = address.text + "Length: " + jsonResult.toString().length();
      }
      
      else {
        address.text = "Forsatt null!!!!";
         }
      
      
      // Fetching some fields to present
      // heading.text = jsonResult.heading as String;         
      // address.text = jsonResult;
      // price.text = jsonResult[0].pris as String;
      //
      
      } 
    
    catch (ignored:Error) { trace('Got error: ' + ignored); }
      
    
    }
    */



  function json_decode(data: String): * {
    try {
      address.text = ExternalInterface.call("getBannerAdData', {'customer': 1, 'area': 1})" + data);
    } catch (e: Error) {
      address.text = address.text + "Fortsatt NULL!!!!";
    }
  }



}

/* function imgLoaded (evt:Event):void {
  this.thumb.addChild(this.ldr);
  this.ldr.x = 0;
  this.ldr.y = 0;
}
*/



if (ExternalInterface.available) {
  var retData: Object;
  retData = ExternalInterface.call("banner.plugin('getBannerAdData', {'customer': 1, 'area': 1})");
  if (retData != null) {
    eidLbl.text = retData.Object();
  } else {
    eidLbl.text = "Data er null!!";
  }
} else {
  eidLbl.text = "JS-funker ikke!!";
}