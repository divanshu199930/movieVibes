import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import {View, Text, StyleSheet, Switch, Animated} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Button} from 'react-native-paper';
import {fetchGenres, fetchPopularMovies} from '../../utils/redux/thunks/movieThunk';
import colors from '../../themes/colors';
import AppButton from '../layout/AppButton';
import {scale, verticalScale} from '../../themes/responsiveSize';
import { useDispatch, useSelector } from 'react-redux';
import commonStyles from '../../themes/commonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FilterPopup = forwardRef(({onApplyFilters}, ref) => {
  const modalizeRef = useRef(null);
  const [selectedGenres, setSelectedGenres] = useState(new Set());
  const [rating, setRating] = useState(0);

  const genres = useSelector(state=> state.movies.genres)

 
  useImperativeHandle(ref, () => ({
    onOpen: () => modalizeRef.current?.open(),
    onClose: () => modalizeRef.current?.close(),
  }));

  // Handles toggling genres in the filter
  const toggleGenre = genreId => {
    setSelectedGenres(prevSelectedGenres => {
      const newSet = new Set(prevSelectedGenres);
      if (newSet.has(genreId)) {
        newSet.delete(genreId);
      } else {
        newSet.add(genreId);
      }
      return newSet;
    });
  };
const dispatch = useDispatch()
  // When applying filters
  const handleApplyFilters = () => {
    const filters = {
      genres: Array.from(selectedGenres),
      rating,
    };
    dispatch(fetchPopularMovies(filters))
    // onApplyFilters(filters);
    modalizeRef.current?.close();
  };
  if (genres?.length > 0) {

  return (
    <Modalize
      ref={modalizeRef}
      modalHeight={verticalScale(600)}
      modalStyle={{
        minHeight: verticalScale(600), 
      }}
      handleStyle={{backgroundColor: colors.whiteOpacityTheme}}>
      <Animated.View style={styles.content}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginBottom : verticalScale(24)}}>
          <Text style={styles.title}>Filters</Text>
         <TouchableOpacity onPress={handleApplyFilters}>

          <Text style={styles.button}>Apply</Text>
          </TouchableOpacity>  
          
        </View>

        <View style={styles.filterSection}>
          <Text style={styles.subtitle}>Genres</Text>
          {genres.map(genre => (
            <View key={genre.id} style={styles.filterRow}>
              <Text>{genre.name}</Text>
              <Switch
                value={selectedGenres.has(genre.id)}
                thumbColor={colors.theme}
                trackColor={colors.whiteOpacityTheme}
                onValueChange={() => toggleGenre(genre.id)}
              />
            </View>
          ))}
        </View>
    
        {/* <Button mode="contained" onPress={handleApplyFilters} style={styles.applyButton}>
          Apply Filters
        </Button> */}
      </Animated.View>
    </Modalize>
  );}
});
const styles = StyleSheet.create({
  content: {
    padding: scale(24),
    flex :1,
    backgroundColor: colors.whiteOpacityTheme
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
   ...commonStyles.fontSemiBold20,
   color:colors.theme
  },
  filterSection: {
    marginBottom: 20,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: '100%',
  },
  applyButton: {
    marginTop: 20,
  },
  // Add more styles as needed
});

export default FilterPopup;
