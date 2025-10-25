import ComponentA from "./lifecycle-method/ComponentA"
import Product from "./error-boundary/Product"
import ErrorBoundary from "./error-boundary/ErrorBoundary"
import SideEffects from "./fetch-data/SideEffects"
import FetchUsers from "./fetch-data/FetchUsers"
import ParentComp from "./memoization/ParentComp"

const App = () => {
  return (
    <> 
    {/* <ComponentA /> */}

    {/* when we add a component inside of oother component it becomes their child so we can acces by the use of this.props.children */}
    {/* <ErrorBoundary>
    <Product product="mobile"/>
    <Product product="laptop"/>
    </ErrorBoundary> */}
    {/* <SideEffects /> */}
    {/* <FetchUsers/> */}
    <ParentComp/>
    </>
  )
}

export default App