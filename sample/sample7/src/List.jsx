import React from "react";
import * as Calcu from "./Calculator";
function List(){
return (
<ol>
<li>sum of two no us {Calcu.add(40,3)}</li>
<li>sum of two no us {Calcu.sub(40,3)}</li>
<li>sum of two no us {Calcu.div(40,3)}</li>
<li>sum of two no us {Calcu.mul(40,3)}</li>
</ol>);
}
export default List;