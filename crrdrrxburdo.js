/////
src(o1)
.layer(src(o1))
.scale(1.0001)
.rotate(-.001)
.mult(shape(200, 2, 2))
.rotate(0.01)
//.luma(0.1, 0.1)
.modulateHue(src(o1), 0.99)
//.blend(src(o1), 0.5)
.out(o1)


//2 SCREEN

src(s0)
  .scale([1.01, 5.2])
  .blend(osc(40,0.9,0.6), 0.05)
  .modulate(o1, 0.001)
  .saturate([1.1, 20, 1])
  .modulateHue(o0)
  .rotate(0, 0.05)
  .modulate(s0, () => mouse.x * 0.0003)
  .out()

  render(o3)

osc(10,11, 0.9)
  .pixelate(10)
  .rotate(0,0.9)
  .kaleid(5)
  .repeat(3)
  .scale(1.01)
.out(o1)

src(o0).blend(src(o0)).out(o3)

src(s0)
  .blend(src(s0), 0.99)
  .contrast(1.2)
  .modulate(o1, 0.01)
  .scale([1.5,2.5])
  //.blend(s0, 0.9)
  .scrollX(2,1.3)
  .scrollY(0.3,1.2)
  //.thresh(0.2, 1)
  //.color([0.1,1.5], [2,1.1,2])
  //.modulate(o1, () => mouse.x * 0.0003)
  //.modulate(o0, () => mouse.y * 0.0003)
//  .kaleid(2)
  //.rotate(0,0.2)
  .saturate([1,3])
  .blend(osc(5,0.09,0.09), 0.09)
  .modulateScale(o0, 10)
  .out(o0)

solid().out(o2)




// 3
  osc(5, 0.3, 0.8)
    .rotate(0, 0.1)
    .kaleid(5)
    .repeat(2)
    .rotate(0, -0.1)
    .diff(src(o2))
    //.mult(src(s0))
    //.diff(src(s0))
    .modulate(o0, () => mouse.y * 0.0003)
    .modulate(o0, () => mouse.x * 0.0003)
    .rotate(0, 0.2)
    .out(o3)

// 4

//STILL BLUE WATEEER
osc(10, 0.001, () => 0.3 + a.fft[0]*2)
  .rotate(0, 0.2)
  .modulate(osc(3, 0.01), 0.4)
  .rotate(0, 0.1)
  .kaleid(5)
  .modulateScale(osc(10,3,0.4), -1, 1.5)
  //.blend(src(s0), 0.9)
  //.scrollX(0, 0.4)
  .modelateHue(o0)
  .saturate(1.1)
  .scale([1.2, 6])
  .out()

// 5 

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

// 7

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
    

 

  
