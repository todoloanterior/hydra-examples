s0.initScreen(1)

s1.initCam(1)

solid().out(o2)

osc([5, 30, 1], 0.9, 1)
  .pixelate()
  .rotate(2)
  .kaleid(5)
  .repeat()
  .repeat(1, 0.5)
  .scrollX()
.out()


osc(110, 0.08, 0.9)
  .rotate(1, 0.2)
  .thresh()
  .out(o1)

osc(250, 0.4, 0.5).thresh().out(o3)

src(o0).blend(o1).mult(o3).out(o2)



render(o0)

//watery cam/initScreen

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

src(s0).scrollY().out(o2)

render(o1)
