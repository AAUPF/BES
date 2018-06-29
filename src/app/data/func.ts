export class Functions {
    testy(the,districts,rain_fall_type,views,year,Comparison,res) {
        the.spinner.hide();
        if (districts == "All") {
          the.map_districts(the.j) 
        } else {

            if (Comparison == "None") {
              this.map_none (districts,rain_fall_type,res)
            } else {
                the.map_bihar_vs_districts(districts,rain_fall_type,views,year)
            }
        }
    }

 
            map_none (l,rain_fall_type,res) {
                let map = document.getElementById("biharsvg") as HTMLObjectElement;
                let svgDoc = map.contentDocument; // should be fine
                let de = svgDoc.querySelectorAll(".fil0");
                let red:any
                red = "Red"
                var i;
               console.log(l);
               
                    var bihar_color = ""
                    var dis_color = ""
                   
                        if (l == "W. Champaran") {
                            var m  = "WChamparan"
        
                        } else if(l == "E. Champaran") {
        
                            var m  = "EChamparan"
        
                        } else {
                            var m:string = l
                        }
                for (let index = 0; index < res.length; index++) {
                    const element = res[index];
                    if(element.below_min){
                        for (let minIndex = 0; minIndex < element.below_min.length; minIndex++) {
                            const h = element.below_min[minIndex];
                            if (h.label == "Bihar") {
                                bihar_color += h.color   
                            }
                            if (h.label == m) {
                                dis_color += h.color     
                            }
                        }
                    }
                    if(element.min){
                        for (let minIndex = 0; minIndex < element.min.length; minIndex++) {
                            const h = element.min[minIndex];
                          
                            if (h.label == "Bihar") {
        
                                bihar_color += h.color
                                
                            }
        
                            if (h.label == m) {
        
                                dis_color += h.color
                                
                            }
                        }
                    }
        
                    if(element.blow_max){
                        for (let minIndex = 0; minIndex < element.blow_max.length; minIndex++) {
                            const h = element.blow_max[minIndex];
                          
                            if (h.label == "Bihar") {
        
                                bihar_color += h.color
                                
                            }
        
                            if (h.label == m) {
        
                                dis_color += h.color
                                
                            }
                        }
                    }
        
                    if(element.max){
                        for (let minIndex = 0; minIndex < element.max.length; minIndex++) {
                            const h = element.max[minIndex];
                          
                            if (h.label == "Bihar") {
        
                                bihar_color += h.color
                                
                            }
        
                            if (h.label == m) {
        
                                dis_color += h.color
                                
                            }
                        }
                    }
        
        
        
                    if(element.above_max){
                        for (let minIndex = 0; minIndex < element.above_max.length; minIndex++) {
                            const h = element.above_max[minIndex];
                           
                            if (h.label == "Bihar") {
        
                                bihar_color += h.color
                                
                            }
        
                            if (h.label == m) {
        
                                dis_color += h.color
                                
                            }
                        }
                    }
        
                    if(element.extreme){
                        for (let minIndex = 0; minIndex < element.extreme.length; minIndex++) {
                            const h = element.extreme[minIndex];
                           
                            if (h.label == "Bihar") {
        
                                bihar_color += h.color
                                
                            } 
                            if (h.label == m) {
        
                                dis_color += h.color
                                
                            }
                        }
                    }
        
        
                    if(element.above_extreme){
                        for (let minIndex = 0; minIndex < element.above_extreme.length; minIndex++) {
                            const h = element.above_extreme[minIndex];
                            console.log(h);
                            if (h.label == "Bihar") {
        
                                bihar_color += h.color
                                
                            }
        
                            if (h.label == m) {
        
                                dis_color += h.color
                                
                            }
                        }
                    }
        
                    
                }
              console.log(dis_color+ "Dis color");
              
                for (i = 0; i < de.length; i++) {
                //    console.log(de[i].classList.item(0)); 
                  // console.log(i);
        
                   de[i].classList.remove("Red","Yellow","Orange","Green","Dark_Green","Light_Green","Dark_Yellow");
                }
                // that.color_map(de,red)

                var bihar_color1 = "fil0"
            
                this.map_change_color_condition(rain_fall_type,de,l,bihar_color1,dis_color)
               
            }


    map_b_vs_d(that,l,rain_fall_type,res){
        let map = document.getElementById("biharsvg") as HTMLObjectElement;
        let svgDoc = map.contentDocument; // should be fine
        let de = svgDoc.querySelectorAll(".fil0");
        let red:any
        red = "Red"
        var i;
    //    console.log(l);
       
            var bihar_color = ""
            var dis_color = ""
           
                if (l == "W. Champaran") {
                    var m  = "WChamparan"

                } else if(l == "E. Champaran") {

                    var m  = "EChamparan"

                } else {
                    var m:string = l
                }
        for (let index = 0; index < res.length; index++) {
            const element = res[index];
            if(element.below_min){
                for (let minIndex = 0; minIndex < element.below_min.length; minIndex++) {
                    const h = element.below_min[minIndex];
                    if (h.label == "Bihar") {
                        bihar_color += h.color   
                    }
                    if (h.label == m) {
                        dis_color += h.color     
                    }
                }
            }
            if(element.min){
                for (let minIndex = 0; minIndex < element.min.length; minIndex++) {
                    const h = element.min[minIndex];
                  
                    if (h.label == "Bihar") {

                        bihar_color += h.color
                        
                    }

                    if (h.label == m) {

                        dis_color += h.color
                        
                    }
                }
            }

            if(element.blow_max){
                for (let minIndex = 0; minIndex < element.blow_max.length; minIndex++) {
                    const h = element.blow_max[minIndex];
                  
                    if (h.label == "Bihar") {

                        bihar_color += h.color
                        
                    }

                    if (h.label == m) {

                        dis_color += h.color
                        
                    }
                }
            }

            if(element.max){
                for (let minIndex = 0; minIndex < element.max.length; minIndex++) {
                    const h = element.max[minIndex];
                  
                    if (h.label == "Bihar") {

                        bihar_color += h.color
                        
                    }

                    if (h.label == m) {

                        dis_color += h.color
                        
                    }
                }
            }



            if(element.above_max){
                for (let minIndex = 0; minIndex < element.above_max.length; minIndex++) {
                    const h = element.above_max[minIndex];
                   
                    if (h.label == "Bihar") {

                        bihar_color += h.color
                        
                    }

                    if (h.label == m) {

                        dis_color += h.color
                        
                    }
                }
            }

            if(element.extreme){
                for (let minIndex = 0; minIndex < element.extreme.length; minIndex++) {
                    const h = element.extreme[minIndex];
                   
                    if (h.label == "Bihar") {

                        bihar_color += h.color
                        
                    } 
                    if (h.label == m) {

                        dis_color += h.color
                        
                    }
                }
            }


            if(element.above_extreme){
                for (let minIndex = 0; minIndex < element.above_extreme.length; minIndex++) {
                    const h = element.above_extreme[minIndex];
                    console.log(h);
                    if (h.label == "Bihar") {

                        bihar_color += h.color
                        
                    }

                    if (h.label == m) {

                        dis_color += h.color
                        
                    }
                }
            }

            
        }
      console.log(dis_color+ "Dis color");
      
        for (i = 0; i < de.length; i++) {
        //    console.log(de[i].classList.item(0)); 
          // console.log(i);

           de[i].classList.remove("Red","Yellow","Orange","Green","Dark_Green","Light_Green","Dark_Yellow");
        }
        // that.color_map(de,red)
    
        this.map_change_color_condition(rain_fall_type,de,l,bihar_color,dis_color)
    
    }

  map_change_color_condition(rain_fall_type,de,l,bihar_color,dis_color) {
        var i;
        for (i = 0; i < de.length; i++) {
        // console.log(de[i].getAttribute("id") + "Jila");
        // var m =  l.toLowerCase();

        console.log(bihar_color + "COlor of Wchamparan");

        if (l == "W. Champaran") {
            var m:string = "wchamparan";
          } 
          else if ( l == "E. Champaran"){
            var m:string = "echamparan";
          }
          
          else {
            var m:string =  l.toLowerCase();
          }
        //   console.log(dis_color);
          

        if (de[i].getAttribute("id") == m) {
            de[i].classList.add(dis_color);
            } else {
            de[i].classList.add(bihar_color); 
            }  
        }
  }
    map_all(that,l){

        let map = document.getElementById("biharsvg") as HTMLObjectElement;
        let svgDoc = map.contentDocument; // should be fine
        // let District = svgDoc.getElementById(a);
        var dis_below_min = ""
        var dis_below_min_color = ""
        var dis_min = ""
        var dis_min_color = ""
        var dis_blow_max = ""
        var dis_blow_max_color = ""
        var dis_max = ""
        var dis_max_color = ""
        var dis_above_max = ""
        var dis_above_max_color = ""
        var dis_ex = ""
        var dis_ex_color = ""
        var dis_abov_ext = ""
        var dis_abov_ext_color = ""
        for (var k in l){
          if (l.hasOwnProperty(k)) {
               if (l[k].below_min) {
                for (let index = 0; index < l[k].below_min.length; index++) {
                  const element = l[k].below_min[index];
                  //  console.log(element.label+ "Min");
                 var string =  element.label.toLowerCase();
                    if (index == l[k].below_min.length - 1) {
                        dis_below_min += "#"+string+"";
                        dis_below_min_color+=element.color
                    } else {
                        dis_below_min += "#"+string+",";
                    }
                }
                 
               } 
               else if (l[k].min) {
                for (let index = 0; index < l[k].min.length; index++) {
                  const element = l[k].min[index];
                  
    
                  if (element.label == "W. Champaran") {
                    var string:any = "wchamparan";
    
                  } else {
                    var string:any =  element.label.toLowerCase();
                  }
    
                  if (index == l[k].min.length- 1) {
                    dis_min += "#"+string+"";
                    dis_min_color+=element.color

                  } else {
                    dis_min += "#"+string+",";
                  }
              
                }
              }
    
              else if (l[k].blow_max) {
                for (let index = 0; index < l[k].blow_max.length; index++) {
                  const element = l[k].blow_max[index];
    
                  if (element.label == "E. Champaran") {
                    var string:any = "echamparan";
    
                  } else {
                    var string:any =  element.label.toLowerCase();
                  }
    
                  if (index == l[k].blow_max.length- 1) {
                    dis_blow_max += "#"+string+"";
                    dis_blow_max_color+=element.color
                  } else {
                    dis_blow_max += "#"+string+",";
                  }
                }
              }
    
              else if (l[k].max) {
                for (let index = 0; index < l[k].max.length; index++) {
                  const element = l[k].max[index];
    
                  var string:any =  element.label.toLowerCase();
                  if (index == l[k].max.length- 1) {
                    dis_max += "#"+string+"";
                    dis_max_color +=element.color
                  } else {
                    dis_max += "#"+string+",";
                  }
                }
              }
    
              else if (l[k].above_max) {
                for (let index = 0; index < l[k].above_max.length; index++) {
                  const element = l[k].above_max[index];
    
                  var string:any =  element.label.toLowerCase();
                  if (index == l[k].above_max.length- 1) {
                    dis_above_max += "#"+string+"";
                    dis_above_max_color +=element.color
                  } else {
                    dis_above_max += "#"+string+",";
                  }
                }
              }
    
    
              else if (l[k].extreme) {
                for (let index = 0; index < l[k].extreme.length; index++) {
                  const element = l[k].extreme[index];
    
                  var string:any =  element.label.toLowerCase();
                  if (index == l[k].extreme.length- 1) {
                    dis_ex += "#"+string+"";
                    dis_ex_color += element.color
                  } else {
                    dis_ex += "#"+string+",";
                  }
                }
              }
    
              else if (l[k].above_extreme) {
                for (let index = 0; index < l[k].above_extreme.length; index++) {
                  const element = l[k].above_extreme[index];
    
                  var string:any =  element.label.toLowerCase();
                  if (index == l[k].above_extreme.length- 1) {
                    dis_abov_ext += "#"+string+"";
                    dis_abov_ext_color += element.color
                  } else {
                    dis_abov_ext += "#"+string+",";
                  }
                }
              }
               
               else {
                 
               }
          }
      }
      let de = svgDoc.querySelectorAll(".fil0");
      let x = svgDoc.querySelectorAll(dis_below_min);
      let y = svgDoc.querySelectorAll(dis_min);
      let w = svgDoc.querySelectorAll(dis_blow_max);
      let z = svgDoc.querySelectorAll(dis_max);
      let e = svgDoc.querySelectorAll(dis_above_max);
      let f = svgDoc.querySelectorAll(dis_ex);
      let g  = svgDoc.querySelectorAll(dis_abov_ext);
    
        console.log(dis_below_min_color+""+dis_min_color+""+dis_blow_max_color);
    
    
      // var i;
      // for (i = 0; i < x.length; i++) {
      //     x[i].classList.add("mystyle");
      // }
      // console.log(dis);
    
      // console.log(dis_y + "Second");
      // console.log(dis_w) + "Third";
      // console.log(dis_z) + "Forth";
    
      var red:any
      var orange:any
      var yellow:any
      var dark_green:any
      var green:any
      var light_green:any
      var Lighter_yellow:any;
      red = "Red"
      orange = "Orange"
      yellow = "Yellow"
      dark_green = "Dark_Green"
      green = "Green"
      light_green = "light_green"
      Lighter_yellow = "Lighter_yellow"
      var i;
      // // for (i = 0; i < de.length; i++) {
      // //     x[i].classList.remove(yellow);
      // // }
      for (i = 0; i < de.length; i++) {
         console.log(de[i].classList.item(0)); 
        // console.log(i);
         de[i].classList.remove("Red","Yellow","Orange","Green","Dark_Green","Light_Green","Dark_Yellow");
      }
    

    
      that.color_map(x,dis_below_min_color)
      that.color_map(y,dis_min_color)
      that.color_map(w,dis_blow_max_color)
      that.color_map(z,dis_max_color)
      that.color_map(e,dis_above_max_color)
      that.color_map(f,dis_ex_color) 
      that.color_map(g,dis_abov_ext_color) 

    

    }
}