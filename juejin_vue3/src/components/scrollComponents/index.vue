<template>
    <div
       @touchstart="start($event)"
        @touchmove="move($event)"
        @touchend="end($event)" 
    >
         <slot></slot>
    </div>
</template>

<script>

const hScroll='h-scroll'
const vScroll='v-scroll'
export default {
   name:'scroll-components',
   emit:[
      hScroll,
      vScroll
  ],
  setup(props,{emit}){
       let startX,startY,m_sX,m_sY,isMove=false;
       const getPoint=(ev)=>{
          const x=ev.changedTouches[0].clientX;
          const y = ev.changedTouches[0].clientY;
          return {x,y}
     }

     const start=(ev)=>{
          ev.stopPropagation();
          const{x,y}=getPoint(ev);
          startX=x;
          startY=y;
     };
     const move=(ev)=>{
          const{x,y}=getPoint(ev);
          m_sX=x-startX;
          m_sY=y-startY;
          console.log(m_sX)
     };
     const end=(ev)=>{
             isMove=false;
             if(Math.abs(m_sX) > Math.abs(m_sY) && Math.abs(m_sX) > 60) {
                  emit(hScroll,m_sX>0?'left':'right');
             }
             if(Math.abs(m_sY) > Math.abs(m_sX) && Math.abs(m_sX) > 60) {
                  emit(vScroll,m_sY>0?'up':'dowm');
                  debugger
             }
             m_sX=0,m_sY=0;
     };
     return{
         start,
         move,
         end
     }
  },
  components: {
    
  }
}
</script>

<style>

</style>
