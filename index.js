const vh = (percentage)=>{
    const ViewportHeight = visualViewport.height
    const decimal = percentage * 0.01;
    percentage = parseInt(percentage, 10);
  
      if (percentage < 0) {
        percentage = 100;
      }
      if (percentage > 1000) {
        percentage = 1000;
      }
  
      return Math.round(ViewportHeight * decimal);
  }
  
  
  const vw = (percentage)=>{
    const ViewportWidth = visualViewport.width;
    const decimal = percentage * 0.01;
    percentage = parseInt(percentage, 10);
  
      if (percentage < 0) {
        percentage = 100;
      }
      if (percentage > 1000) {
        percentage = 1000;
      }
  
      return Math.round(ViewportWidth * decimal);
  }
  
  const ph = (id,percentage)=>{
      const Element =  document.getElementById(id);
    const ParentHeight = (Element==null)?visualViewport.height:Element.clientHeight;
    const decimal = percentage * 0.01;
    percentage = parseInt(percentage, 10);
  
      if (percentage < 0) {
        percentage = 100;
      }
      if (percentage > 1000) {
        percentage = 1000;
      }
  
      return Math.round(ParentHeight * decimal);
  }
  
  const pw = (id,percentage)=>{
    const Element =  document.getElementById(id);
    console.log(Element);
    const ParentWidth = (Element==null)?visualViewport.width:Element.clientWidth;
    const decimal = percentage * 0.01;
    percentage = parseInt(percentage, 10);
  
      if (percentage < 0) {
        percentage = 100;
      }
      if (percentage > 1000) {
        percentage = 1000;
      }
  
      return Math.round(ParentWidth * decimal);
  }
  
  
  export {vh,vw,ph,pw};
  