shape(2, 0.5,0.3)
.modulateScrollY(noise(1,0.5).modulate(noise(0.2,0.6)).blend(o1,0.99).out(o1)
.modulateScrollY(shape(2,0.4).repeat(9).scrollY(0,1).rotate(0.0.5).mult(noise)))
.out(o1)



s0.initScreen(0)
src(s0)
  noise(0.01,0.01).colorama( ({time}) => Math.sin(time/50) ).add(osc(() => mouse.x))
  .brightness(0.7)
  .scale([1.01, 1.02])
  .blend(osc(10,0.009,0.006).rotate(1.5))
  .modulate(o1, 0.001)
  .saturate([30, 32])
  .modulateRotate(o0)
  .rotate(0, 0.005)
  .modulate(o0, () => mouse.x * 0.0003)
  .out()
