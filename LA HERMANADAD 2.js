/////  CURSOR WAR
src(s0)
//.layer(src(o1))
.scale(1.01)
.rotate(-.001)
//.mult(shape(200, 2, 2))
.rotate(0.01)
.contrast(2)
.luma(0.1, 0.1)
.modulate(voronoi(1, 0.1, 0.5)).modulateScale(osc(10, 0.2), 0.1)
.modulateScale(osc(4, 0.1))
.saturate(1.1)
//.blend(src(o0), 0.5)
.out(o0)



//////////  COLOR FEEDBACK

src(s0)
.thresh(0.5)
//.scrollX(0, -0.1)
.mult(osc(10, 0.2, 0)
.color(1, 1, 0)
.modulate(noise(3,1)).modulate(o0),1)
//.modulateScale(osc(3, 0.2), -0.8)
.add(src(o0).modulate(osc(3,0.3)).scrollY(0,-0.1),1)
//.blend(src(o0).scrollY(-0.1),0.2)
.diff(src(o0).scrollY(0,-0.1).diff(osc(3,0.5)),0.1)
.out()




src(s0)
  //.blend(src(s0), 0.99)
  .contrast(1.2)
  .modulate(o1, 0.01)
  .scale([1.5,1.5])
  //.blend(s0, 0.9)
  .scrollX(0.2,0.3)
  .scrollY(0.3,0.2)
  //.thresh(0.2, 1)
  //.color([0.1,1.5], [2,1.1,2])
  //.modulate(o1, () => mouse.x * 0.0003)
  //.modulate(o0, () => mouse.y * 0.0003)
//  .kaleid(2)
  //.rotate(0,0.2)
  .saturate([1,3])
  .blend(osc(5,0.09,0.09), 0.09)
  .modulateScale(o0, 0.1)
  .out(o0)



// 5   TEXTO LIQUIDO

solid()
  .blend(s0, 0.92)
  .saturate(1.5)
  .hue(0.02)
  .modulateHue(o0, 10)
  .brightness(0.006)
  .contrast(1.01)
  .scale(() => 0.999 + a.fft[0]*0.04, 0.99996, 1, 0.5, ()=>Math.sin(time*0.1)*0.1 + 0.1)
  .modulateScale(osc(4).kaleid(10), -0.02, 1.01)
  .colorama(0.01)
//.layer(src(s0).saturate(1.1).luma().scale(1.02).scrollX(0,0), 0.8)
////.blur(() => a.fft[3], 0)
  .rotate(-0.004, 0.000)
.out()

// 6

solid()
  .diff(o0)
  .blend(o0, 0.9)
  .saturate(1.001)
  .hue(0.01)
  .modulate(o0, 0.01)
  .brightness(0.006)
  .contrast(1.01)
  .scale(() => 0.999 + a.fft[0]*0.02, 0.99996, 1, 0.5, ()=>Math.sin(time*0.1)*0.1 + 0.1)
  .scale(() => 0.999 + a.fft[0]*0.03, 0.999, 1)
  .modulateScale(osc(40).kaleid(10), -0.03, 1.01)
  .colorama(0.001)
  .layer(src(s0).saturate(1.1).luma().scale(1.02).scrollX(0,0), 0.8)
  //.blur(() => a.fft[3], 0)
  .luma(() => 0.9 * a.fft[2]*2)
  //.scrollX(0, 0.1)
  .out()

// 7  GRADIENT

src(s0)
//.diff(gradient(1).repeat(10, 1))
  .diff(osc(2, 0.3, 0.9).rotate(Math.PI/2))
//.saturate(4)
//.diff(o0)
//.scrollX(0.1, 0.1)
  .saturate(1.6)
//.repeat()
  .scale(0.99, 1, 1, 0.3)
  .blend(o0, 0.8)
  .saturate(1.06)
  .contrast(1.08)
  .scale(1.003)
  .out()


//8

osc(1, 0.001, () => 0.3 * a.fft[0]*2)
  .rotate(0, 0.2)
  .modulateScale(osc(5, -1, 1.5))
  .blend(src(s0), 0.99)
  .modulate(noise(2, 0.07).scrollX(0, 0), 0.002)
  //.modulateHue(o0, () => a.fft[0]*3)
  .saturate(1.1)
  .colorama(0.01)
//.layer(src(s0).saturate(1.1).luma().scale(1.02).scrollX(0,0), 0.8)
  .scale(0.999)
  .out()


/////edgess /////////


osc(100, .1, [0,6])
  .mult(shape(1, () => a.fft[0]*0.2))
  .out(o1)
src(o0)
  .modulateHue(src(o0).scale(1.01),1.1)
  //.layer(src(o1).luma(.1, .03).scrollX( [.25,-.25]).scrollY(0))
  .scrollY([0, 0, -0.001])
  .scrollX(.001)
  .contrast(2.1)
  //.scale([1, 1, 1, 1, 1,1,1,1, 1.1])
  .out()
    

 ///////// faded //////////////////


src(o0)
.rotate(0,0.1)
.add(shape([2,3,4,5])
.scale(1,0.2,1)
.scrollX(0.3,-0.31)
.rotate(0,0.03))
.add(shape(3).scale(1,0.3,0.1).color(0.1,0.8,1).scrollX(-0.3,0.02)).rotate(0, -0.05).modulateHue(src(o0).scale(1,0.1),1).layer(osc(0.9,0.8,0.2).mask(shape([2,4,6,8,7,4,3],0.007,0.02))).rotate(0,0.01).modulate(voronoi(101)).modulate(osc(1,1)).mask(shape(4)).modulate(osc(1000))
.out()

  
