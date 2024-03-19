import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import { fetchTrailerKey } from '../../utils/redux/thunks/movieThunk';
import { scale, verticalScale } from '../../themes/responsiveSize';
import colors from '../../themes/colors';

const MovieCardHorizontal = ({ movie }) => {
    const [videoUrl, setVideoUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Assume fetchTrailerKey correctly fetches the YouTube video ID
        fetchTrailerKey(movie.id).then(key => {
            setVideoUrl(key); // Directly store the YouTube video ID
        });
    }, [movie.id]);
    return (
        <View style={styles.card}>
            {(videoUrl) && 
                <YoutubeIframe 
                    key={videoUrl}
                    height={verticalScale(215)} 
                    play={false} 
                    videoId={videoUrl}
                    webViewStyle={styles.iframe}
                    onReady={() => setIsLoading(false)}
                />}
                {isLoading &&
                <ActivityIndicator color={colors.steelGray} size={'large'} style={{position: "absolute", top: 0, right :0, left : 0, bottom: 0}}/>}
            
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: scale(8),
        height: verticalScale(215),
        backgroundColor: colors.whiteOpacity20,
        borderRadius: scale(10), 
        overflow: 'hidden', 
        elevation: 3, 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: scale(8),
        justifyContent: "center"
    },
    iframe: {
        borderRadius: scale(10), 
    },
});

export default MovieCardHorizontal;
