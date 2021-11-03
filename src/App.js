import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { AboutPage } from "./pages/About"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { PlacePage } from "./pages/Place"

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <Switch>
            <Route component={Homepage} path='/' exact />
            <Route component={AboutPage} path='/about' />
            <Route component={PlacePage} path='/gut' />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
