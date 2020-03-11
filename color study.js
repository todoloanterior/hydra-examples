shape().scale(2).repeat().repeat().saturate(1,2).scrollX(1,0.001).out(o0)

osc(2.5).rotate(90).colorama([0.53,0.6,1.0].fast(0.0125)).modulateRotate(osc(0.11,-0.05,1).kaleid(10)
            .scale(0.5),15,0).modulateHue(osc(2,0.9,0.5)
            .kaleid(3)
            .scale(({time})=>Math.sin(time*1)*0.05+1)
            .modulate(noise(0.6,0.5)),
            0.5).saturate( ({time}) => Math.sin(time) * 20 ).rotate(({time})=>(time%360)/1).mult(osc(3,0.5,1))
  .modulateRepeat(osc(5), 1.0, 1.0, -0.5, -0.5).blend(o2, 0.99).blend(src(o2), 0.9).out(o2)

  src(o2)
    .diff(shape(6,1.1,0.01)
          .scale(({time})=>Math.sin(time)*0.5 + 0.9)
          .kaleid(5)
          .rotate(({time})=>time%360))
    .out(o3)

s0.initScreen(1)

solid().out(o1)

render()
