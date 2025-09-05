import { Image } from "react-native";
import { StyleSheet } from 'react-native';

export default function ProductImage() {
    return (
        <Image source={require('../assets/wallpaper.jpg')} style={styles.wallpaperImage} />
    );
}

const styles = StyleSheet.create({
    wallpaperImage: {
        maxWidth: 300,
        maxHeight: 300,
        borderRadius: 10,
        aspectRatio: 1,
    }
})
    