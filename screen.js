osc(1,0.6,85).out(o0)

render(o2)


s0.initCam()

s1.initScreen(1)

src(s0)
.blend(o0, 0.99)
.out(o0)

src(o1).modulateHue(o0, 0.1).saturate([1,2]).blend(o0).color().out(o3)

osc(20).diff(s0).mult(osc(1, 2, 8)).modulate(o2).add(o1).diff(o3).modulate(o3, 0,1).blend(o2).out(o3)

s1.initScreen()

src(s1)
.scale(1.3, 0.9)
//.modulateScale(osc(105,2,0).scale(10),50,0.1)
.scrollX(0.01,-0.8)
//.scrollY(0.002, 2)
//.add(osc(4,-0.4,0.5)).diff(osc(4, -0.4, 0.5))
.blend(osc(5,1,0.99))
.saturate([1,4])
.blend(src(s1).osc(1, 0.02))
.modulate(osc(20,1,1))
//.shift()
.hue(3)
.out()

solid().out(o3)
render(o3)

//watery code
src(s1)
.modulate(osc(10,20,1))
.blend(o1)
.scrollX(2,0.0003)
.saturate([1.2, 4])
.contrast(1.01)
.scale(1.9)
//.blend(0.5)
.hue(0.9)
.modulateHue(o0, 10)
.out(o1)

solid().out(o3)

render(o1)


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

  render(o3)

  .out(o3)



//whisky
shape(100, [0.005,0.009])
.scale(0.5,0.5)
.modulate(noise(3))
.scrollX(()=>Math.sin(1*time)*0.1)
.scrollY(()=>Math.sin(1*time)*-0.2)
.modulate(noise(3))
.rotate(0,3)
.diff(src(o0).scrollY(-0.001))
.out(o3)


//CAMARA COLOR
s0.initCam()
s1.initScreen()
src(s0).out(o0)
src(s1).out(o2)
osc(() => (100 * Math.sin(time * 0.01))).diff(s0).color(1,3,21).out(o0)
osc(0.5,10.10,0.2).diff(s0).luma([0.1,0.25,0.75,1]).saturate( ({time}) => Math.sin(time) * 10 ).shift(23,1,5).thresh(0.5,0.5).out(o1)
render(o1)



//CAMARA SHAPES
s0.initCam()
src(s0).blend(s0).out(o0)
noise()
  .mult(osc(10,0.25,1))
  .scrollY(1,0.25)
  .pixelate([100,40,20,70].fast(0.25))
  .modulateRotate(src(o0).scale(0.5),0.125)
  .diff(src(o0).rotate([-0.05,0.05].fast(0.125)))
  .out(o1)
render(o0)



//SCREEN V3
