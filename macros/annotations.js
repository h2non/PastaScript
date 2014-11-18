macro def {
    rule {
        $name:ident ( $($params:ident : $type:ident) (,) ...) $body 
    } => {
        // just throwing away the type annotation. The semantics of type
        // annotations left as an exercise to the reader :)
        function $name ($params (,) ...) $body
    }
}
 
// def add (a : Number, b : Number) {
//    return a + b;
//}
 
// add(1,2)

export def
