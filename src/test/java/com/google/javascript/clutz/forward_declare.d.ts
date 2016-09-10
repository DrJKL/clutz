declare namespace ಠ_ಠ.clutz.forward {
  class A extends A_Instance {
  }
  class A_Instance {
    private noStructuralTyping_: any;
    //!! forward.D may or may not be part of the compilation unit.
    //!! If it is part of it might be a generic at which point TS will error
    //!! if we output just forward.D, so we output any to be on the safe side.
    fn (a : any ) : any ;
  }
}
declare namespace goog {
  function require(name: 'forward.A'): typeof ಠ_ಠ.clutz.forward.A;
}
declare module 'goog:forward.A' {
  import alias = ಠ_ಠ.clutz.forward.A;
  export default alias;
}
