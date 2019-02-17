import React, {Component} from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Image, ImageBackground, LinkingIOS, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import { AppLoading, Asset, Constants, Font, Icon, Location, Permissions } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// Imports global stylesheet
var style = require('./styles/style');

// React Notes
// States should be declared in constructor and call setState when you want to change it
// Use redux instead of setState is using redux for data flow
// Treat props like passed in params
// Props are relatively permanent while states change
// Be mindful that with ECMAScript6, function(param) becomes function(param => does something with param)
// JSX uses camelCase instead of dashed-params
// Things to consider: Using AppLoading and caching for things that take a long time
// Also have camera permissions Permissions.askAsync(Permissions.CAMERA)

class HomeScreen extends React.Component {
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={style.background}>
        {/* <ImageBackground source={'./assets/images/uranus_tex.png'} style={{width: '100%', height: '100%'}}> */}
          <View style={style.landingContainer}>
            <Text style={style.landingScreenTitle}>Navigating the 21st Century</Text>
          </View>
          <Image style={style.image} source={require('./assets/images/social-media.png')} />
          <View style={style.buttonContainer}>
            <TouchableOpacity
              style={style.button}
              onPress={() => navigate('Options', {})}
            >
              <Text> Start </Text>
            </TouchableOpacity>
          </View>
         {/* </ImageBackground> */}
      </SafeAreaView>
    );
  }
}

class BiasScreen extends React.Component {
  static navigationOptions = {
    title: 'Algorithmic Bias',
  };
  render() {
    var description = "It has long been thought that machines are objective. Unlike humans, they are not swayed by emotion or prejudice... or so we would like to think. In May 2016, ProPublica published a story called Machine Bias, which analyzed the performance of an algorithm called COMPAS. COMPAS is a piece of software used in the criminal justice system in Broward County, Florida, that predicts the risk of recidivism, or the chance that someone will reoffend, before their trial. ProPublica's analysis indicated that African Americans were more likely to be misclassified as higher risk, while more Caucasians were more likely to be misclassified as lower risk. This is the most well documented and publicized story of algorithmic bias, but it is by no means the only story. As algorithms are increasingly used to help inform our decisions, we must be wary not to programatically marginalize already marginalized minority groups from historical prejudices and implicit bias. Yet, that is a difficult task. To give a very high level overview of how machine learning works, you essentially have a set of features and a set of weights for those features that determine the output of your algorithm. Those weights are learned from the training data given to the model, meaning that with each new set of examples, the weights are adjusted accordingly. This is a very basic overview, and in practice, models usually tend to be more complicated and become more of black boxes that take in inputs and output results that the algorithm is supposedly optimized to produce.";
    return(
      <SafeAreaView style={style.background}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ScrollView>
            {/* <Image style={style.image} source={require('./assets/images/home.png')} /> */}
            <Text style={style.description}>{description}</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

class VehicleScreen extends React.Component {
  static navigationOptions = {
    title: 'Autonomous Vehicles',
  };
  render() {
    var description = "Technological automation is not a new concept. Technology has been part of our lives for years from ATMs to credit scores. Yet what seems to make the advent of artificial intelligence is our loss of agency. There are neural networks capable of defeating humans at chess and accomplishing near-human performance in many classification tasks. They are even supposedly safer drivers. If machines are truly able to accomplish tasks better than humans, then is it not better to allow the machines to do them?"
    return(
      <SafeAreaView style={style.background}>
        <Image style={style.image} source={require('./assets/images/car.png')} />
        <Text style={style.description}>{description}</Text>
      </SafeAreaView>
    );
  }
}

class AlgorithmScreen extends React.Component {
  static navigationOptions = {
    title: 'Algorithms',
  };

  render() {
    const {navigate} = this.props.navigation;
    var description = "The past few decades of human history have seen rapid technological innovation, particularly in the sphere of algorithms and artificial intelligence. We are not yet at the point where machines run our lives, but they have and continue to be integrated into society whether it is your online banking or autonomous vehicles. As algorithms continue to take on more and more human tasks, we should understand who benefits and suffers and how our values play a key role in the direction of technology. Like data privacy, this too is an ongoing conversation.";

    return (
      <SafeAreaView style={style.background}>
        <Image style={style.image} source={require('./assets/images/algorithm.png')} />
        <Text style={style.description}>{description}</Text>
        <FlatList
          data={[
            {key: 'Algorithmic Bias', screen: 'Bias'},
            {key: 'Autonomous Vehicles', screen: 'Vehicle'},
          ]}
          renderItem={({item}) => <View style={style.buttonContainer}><TouchableOpacity style={style.button} onPress={() => navigate(item.screen, {})}><Text>{item.key}</Text></TouchableOpacity></View>}
        />
      </SafeAreaView>
    );
  }
}

class DataCheckoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Data Checkout',
  };

  render() {
    var description = "Companies surprisingly (or not so surprisingly) have a lot of data on you. Consider all the time you spend on messaging apps, browsing social media, or scrolling through cat memes. In accordance with GDPR, many companies have made it easier to see what exactly they have collected on you. Here are some links to help you get an idea of what your data looks like out in the world.";
    return(
      <SafeAreaView>
        <Text style={{color: 'blue'}}
        onPress={() => LinkingIOS.openURL('https://takeout.google.com/settings/takeout')}>Google Takeout</Text>
        <Text style={{color: 'blue'}}
        onPress={() => LinkingIOS.openURL('https://www.facebook.com/help/1701730696756992?helpref=hc_global_nav')}>Download Instructions for Facebook Data</Text>
      </SafeAreaView>
    );
  }
}

class GDPRScreen extends React.Component {
  static navigationOptions = {
    title: 'GDPR',
  };
  render() {
    var description = "In 2018, the UK passed the General Data Protection Regulation (GDPR), a set of strict guidelines that outline user privacy for all its European users. Because many tech services in the US have European users, many complied to GDPR for all their users. So what did GDPR require?"
    return(
      <SafeAreaView>
        <Text style={style.description}>{description}</Text>
        <View style={style.gdprcontainer}>
          <Text>Clear Language</Text>
          <Text>User Consent</Text>
          <Text>Transparency</Text>
        </View>
        <View style={style.gdprcontainer}>
          <Text>Stronger Enforcement</Text>
          <Text>User Control Over Data</Text>
        </View>
      </SafeAreaView>
    );
  }
}

class DebateScreen extends React.Component {
  static navigationOptions = {
    title: 'Privacy vs Security Debate',
  };
  render() {
    var description = "If you went through some of the earlier modules, you might find it at least mildly alarming the amount data floating around on the internet about you. However, it is not all bad. In exchange for user privacy, what do we gain?"
    return(
      <SafeAreaView>
        <Image style={style.image} source={require('./assets/images/profile.png')} />
        <Text style={style.description}>{description}</Text>
      </SafeAreaView>
    );
  }
}

class PrivacyScreen extends React.Component {
  static navigationOptions = {
    title: 'Data Privacy',
  };

  render() {
    const {navigate} = this.props.navigation;
    var description = "After GDPR passed in the UK, websites began bombarding users with updated privacy policies that you likely did not read. However, it might be worth taking a second glance at what you supposedly agreed to. Every online platform is a service where the product is likely your data in some way, shape, or form. In this module, we will take a look at the rights that GDPR afford us, the ways you can download the data companies have on you, and the tradeoffs between privacy and security.";

    return (
      <SafeAreaView style={style.background}>
        <Text style={style.description}>{description}</Text>
        <FlatList
          data={[
            {key: 'GDPR', screen: 'GDPR'},
            {key: 'Data Checkout', screen: 'DataCheckout'},
            {key: 'Privacy vs Security Debate', screen: 'Debate'},
          ]}
          renderItem={({item}) => <View style={style.buttonContainer}><TouchableOpacity style={style.button} onPress={() => navigate(item.screen, {})}><Text>{item.key}</Text></TouchableOpacity></View>}
        />
      </SafeAreaView>
    );
  }
}

class DigitalYouScreen extends React.Component {
  static navigationOptions = {
    title: 'The Digital You',
  };
  render(){
    const {navigate} = this.props.navigation;
    var description = "Though we may not think too much of it, everytime we post online, we are shaping our digital selves. All those Instagram posts that strike jealousy in others are influencing us to believe that our friends are living the dream.";
    return(
      <SafeAreaView style={style.background}>
        <Text style={style.description}>{description}</Text>
      </SafeAreaView>
    );
  }
}

class EchoChamberScreen extends React.Component {
  static navigationOptions = {
    title: 'Echo Chambers',
  };
  render(){
    const {navigate} = this.props.navigation;
    var description = "Besides 'fake news,' the other buzzword in the media sphere is 'echo chamber.' Echo chambers are environments where people only encounter others who share the same beliefs and opinions, often creating self-affirming cycles that disengage with opposing viewpoints. Above is a graph generated from my CS224W team's research on political subcommunities on Reddit, where we found that the more important users were ones who engaged in discourse with both liberals and conservatives.";
    return(
      <SafeAreaView style={style.background}>
        <Image style={{ width: 250, height: 200, margin: 20,}} source={require('./assets/images/cs224-12-2017-graph.png')} />
        <Text style={style.description}>{description}</Text>
      </SafeAreaView>
    );
  }
}

class FakeNewsScreen extends React.Component {
  static navigationOptions = {
    title: 'Fake News',
  };
  render(){
    const {navigate} = this.props.navigation;
    var description = "Russian bots. Sensationalist headlines. There is a general consensus that fake news is bad and that there appear to be interests out there that wish to threaten American democracy by sewing doubt in media. So how can we better evaluate our news? Below are some exercises and tips on how to be mindful about your news intake. Don't take everything you read at face value.";
    return(
      <SafeAreaView style={style.background}>
        <Text style={style.description}>{description}</Text>
      </SafeAreaView>
    );
  }
}

class LocalMediaScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      place: null,
    }
  }

  componentDidMount(){
    const { navigation } = this.props;
    const place = navigation.getParam('place', 'No place identified');
    return fetch('https://newsapi.org/v2/top-headlines?' + 'q=' + place + '&language=en&' + 'sortBy=relevancy&' + 'apiKey=a94a02592f9b4eddbf6737248015d8bb')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.articles,
          place: place,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  // static navigationOptions = {
  //   title: "News from ",
  // };

  render(){
    if(this.state.isLoading){
      return(
        <SafeAreaView style={{flex: 1, padding: 20, justifyContent: 'center'}}>
          <ActivityIndicator/>
        </SafeAreaView>
      )
    }

    return (  
      <SafeAreaView>
        <Text>News from {this.state.place}</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={style.description}>Source: {item.source.name}{'\n'}Title: {item.title}{'\n'}Description: {item.description}{'\n'}</Text>}
        />
      </SafeAreaView>
    );
  }
}

class MediaScreen extends React.Component {
  static navigationOptions = {
    title: 'Media Literacy',
  };
  render(){
    const {navigate} = this.props.navigation;
    var description = "With the rise of fake news and echo chambers in the scheme of the current political climate, it has become increasing vital that we understand the sources of our news and the biases they carry and to carry on civil discourse with those of opposing viewpoints.";
    return (
      <SafeAreaView style={style.background}>
        <Text style={style.description}>{description}</Text>
        <FlatList
          data={[
            {key: 'Scoping News', screen: 'ScopingNews'},
            {key: 'The Digital You', screen: 'DigitalYou'},
            {key: 'Echo Chambers', screen: 'EchoChamber'},
            {key: 'Fake News', screen: 'FakeNews'},
          ]}
          renderItem={({item}) => <View style={style.buttonContainer}><TouchableOpacity style={style.button} onPress={() => navigate(item.screen, {})}><Text>{item.key}</Text></TouchableOpacity></View>}
        />
      </SafeAreaView>
    );
  }
}

class ScopingNewsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true, 
      location: null,
      result: null,
      errorMessage: null,
      city : null,
      region: null, // state is a keyword so using region
      country: null,
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    let result = await Location.reverseGeocodeAsync(
      {"latitude": location.coords.latitude, "longitude": location.coords.longitude}
    );
    this.setState({ location });
    this.setState({ result });
    this.setState({ city: result[0].city });
    this.setState({ region: result[0].region });
    this.setState({ country: result[0].country });
    this.setState({ isLoading: false });
  };

  static navigationOptions = {
    title: 'Scoping News',
  };

  componentDidMount(){
    this._getLocationAsync();
  }

  render() {
    var description = "News looks different depending on what perspective it's told from. Your news feed might be covered with articles about the current government administration, but how is that affecting your local town? How is it affecting the world abroad? No man is an island, and it is important to contextualize.";
    
    if(this.state.isLoading){
      return(
        <SafeAreaView style={{flex: 1, padding: 20, justifyContent: 'center'}}>
          <ActivityIndicator/>
        </SafeAreaView>
      )
    }

    let locationText = 'Loading...';

    if (this.state.errorMessage) {
      locationText = this.state.errorMessage;
    } else if (this.state.result) {
      locationText = JSON.stringify(this.state.result[0].city);
    }

    return (
      <SafeAreaView style={style.background}>
        <Text style={style.description}>{description}</Text>
        <FlatList
          data={[
            {key: 'News from ' + this.state.city, screen: 'LocalMedia', place: this.state.city},
            {key: 'News from ' + this.state.region, screen: 'LocalMedia', place: this.state.region},
            {key: 'News from ' + this.state.country, screen: 'LocalMedia', place: this.state.country},
          ]}
          renderItem={({item}) => <View style={style.buttonContainer}><TouchableOpacity onPress={() => this.props.navigation.navigate(item.screen, {place: item.place})} style={style.button}><Text>{item.key}</Text></TouchableOpacity></View>}
        />
      </SafeAreaView>
    );
  }
}

class OptionScreen extends React.Component {
  static navigationOptions = {
    title: 'Topics',
  };
  render() {
    const {navigate} = this.props.navigation;
    var description = "The promises and perils of the 21st century naturally surround the technological sphere. Fake news, data privacy, and algorithmic decision making have all made headlines within the past few years. In order to continue to make informed decisions, carry out our civic duty as informed voters, and maintain our autonomy over decisions that have and will have widespread impact, we should make an effort to critically view the systems and technology that are omnipresent within our everyday lives.";
    return (
      <SafeAreaView style={style.background}>
        <Text style={style.description}>
          {description}
        </Text>
        <FlatList
          data={[
            {key: 'Media Literacy', screen: 'Media'},
            {key: 'Data Privacy', screen: 'Privacy'},
            {key: 'Algorithms', screen: 'Algorithm'},
          ]}
          renderItem={({item}) => <View style={style.buttonContainer}><TouchableOpacity style={style.button} onPress={() => navigate(item.screen, {})} ><Text>{item.key}</Text></TouchableOpacity></View>}
        />
      </SafeAreaView>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Options : {screen: OptionScreen},
  Media: {screen: MediaScreen},
  Privacy: {screen: PrivacyScreen},
  Algorithm: {screen: AlgorithmScreen},
  LocalMedia: {screen: LocalMediaScreen},
  DataCheckout: {screen: DataCheckoutScreen},
  GDPR: {screen: GDPRScreen},
  Debate: {screen: DebateScreen},
  EchoChamber: {screen: EchoChamberScreen},
  Bias: {screen: BiasScreen},
  Vehicle: {screen: VehicleScreen},
  DigitalYou: {screen: DigitalYouScreen},
  FakeNews: {screen: FakeNewsScreen},
  ScopingNews: {screen: ScopingNewsScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isShowingText: true };

//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text style={this.props.color}>{this.props.text}</Text>
//     );
//   }
// }

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
  
  // render() {
    
  //   return (
  //     <SafeAreaView>
  //       <Blink text='I love to blink' />
  //       <Blink text='Yes blinking is so great' />
  //       <Blink text='Why did they ever take this out of HTML' />
  //       <Blink color={style.blue} text='Look at me look at me look at me' />
  //     </SafeAreaView>
  //   );

    // return (
    //   <View style={{alignItems: 'center'}}>
    //     <Greeting name='Rexxar' />
    //     <Greeting name='Jaina' />
    //     <Greeting name='Valeera' />
    //   </View>
    // );

    // let pic = {
    //   uri: 'https://vignette.wikia.nocookie.net/hiironokakera/images/a/ac/Hiiro_no_Kakera_fox.jpg/revision/latest?cb=20120329142838'
    // };
    // return (
    //   <Image source={pic} style={{width: 193, height: 110}}/>
    // );
  // }
// }

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false,
//   };

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <View style={styles.container}>
//           {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//           <AppNavigator />
//         </View>
//       );
//     }
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([
//       Asset.loadAsync([
//         require('./assets/images/robot-dev.png'),
//         require('./assets/images/robot-prod.png'),
//       ]),
//       Font.loadAsync({
//         // This is the font that we are using for our tab bar
//         ...Icon.Ionicons.font,
//         // We include SpaceMono because we use it in HomeScreen.js. Feel free
//         // to remove this if you are not using it in your app
//         'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//       }),
//     ]);
//   };

//   _handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
