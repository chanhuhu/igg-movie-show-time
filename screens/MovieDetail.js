import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import { WebView } from 'react-native-webview';
import axios from 'axios'
import moment from 'moment'

export default function MovieDetail({ navigation, route }) {
  const [movies, setMovies] = useState(
    {
      genre: [],
    }
  )
  const itemId = route.params.id
  useEffect(() => {
    axios.get(`https://movie-api.igeargeek.com/movies/${itemId}`)
      .then(res => {
        console.table(res.data)
        const movies = res.data
        setMovies(movies)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{flex: 1}}
      contentContainerStyle={{flexGrow: 1}}>
      <WebView
        source={{uri: movies.youtubeUrl}}
        style={{height: 300}}
        allowsFullscreenVideo={true}
      />
      <View style={{ flex: 2, padding: 15, backgroundColor: '#372420'}}>
        <View style={{flexDirection: 'row'}}>
          <Image 
            source={{ uri: movies.posterUrl }} 
            style={{ flex: 1, height: 180,}}
            resizeMode={'stretch'}
          />
          <View style={
            {
              flex: 2,
              marginLeft: 15,
            }
          }>
            <Text style={{ color: 'white', fontSize: 17}}> {movies.name}</Text>
            <Text style={{ color: 'white'}}>ประเภท: {movies.genre.join(', ')}</Text>
            <Text style={{ color: 'white'}}>วันที่เข้าฉาย: {moment(movies.showingAt).format('DD/MM/YYYY')}</Text>
            <Text style={{ color: 'white'}}>ระยะเวลาฉาย: {movies.duration} นาที</Text>
          </View>
        </View>
        <View style={
          {
            borderBottomColor: 'white',
            borderBottomWidth: 0.5,
            marginVerical: 15,
          }
        }>
        <View style={{ flex:1 }}>
          <Text style={{ color: 'white' }}>{movies.description}</Text>
        </View>

        </View>
      </View>
    </ScrollView>
  )
}
