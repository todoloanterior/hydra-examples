// VORTEX

shape(200, 2, 0.3)
.modulateScrollY(noise(0.1,0.5).modulate(noise(0.2,0.6)))
.modulateScrollX(noise(0.5,0.1).modulate(noise(0.6,0.2)))
.mult(osc(6,0.1,1))
//.repeat(2,2)
.blend(o1,0.9)
.rotate(-0.01)
.modulateScale(src(o1), 0.01)
.out(o1)

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


//
