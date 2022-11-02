import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import PostCard from "../components/PostCard"
import firestore from "@react-native-firebase/firestore";


const Profile = () => {


    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const fetchPosts = async () => {
        try {
            const list = [];

            await firestore()
                .collection('posts')
                .where('userId', '==', user.uid)
                .orderBy('postTime', 'desc')
                .get()
                .then((querySnapshot) => {
                    // console.log('Total Posts: ', querySnapshot.size);

                    querySnapshot.forEach((doc) => {
                        const {
                            userId,
                            post,
                            postImg,
                            postTime,
                            likes,
                            comments,
                        } = doc.data();
                        list.push({
                            id: doc.id,
                            userId,
                            userName: 'Test Name',
                            userImg:
                                'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                            postTime: postTime,
                            post,
                            postImg,
                            liked: false,
                            likes,
                            comments,
                        });
                    });
                });

            setPosts(list);

            if (loading) {
                setLoading(false);
            }

            console.log('Posts: ', posts);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <ScrollView

                    contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
                    showsVerticalScrollIndicator={false}
                >
                    <Image style={styles.userImg} source={require('../images/users/user-2.jpg')} />
                    <Text style={styles.userName}>Sajid Sajid </Text>
                    <Text style={styles.aboutUser}>Lorem ipsum. Sit ipsa ce quo quisquam voluptatibus, qui eius teneturis doloremque eaque id tempore praesentium, fuga eveniet odio repellat nihil.</Text>
                    <View style={styles.userBtnWrapper}>
                        <TouchableOpacity style={styles.userBtn} onPress={() => { }}>
                            <Text style={styles.userBtnTxt}>Message</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userBtn} onPress={() => { }}>
                            <Text style={styles.userBtnTxt}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userInfoWrapper}>
                        <View style={styles.userInforItem}>
                            <Text style={styles.userInfoTitle}>22</Text>
                            <Text style={styles.userInfoSubTitle}>Posts</Text>

                        </View>
                        <View style={styles.userInforItem}>
                            <Text style={styles.userInfoTitle}>10,000</Text>
                            <Text style={styles.userInfoSubTitle}>Fllower</Text>
                        </View>
                        <View style={styles.userInforItem}>
                            <Text style={styles.userInfoTitle}>100</Text>
                            <Text style={styles.userInfoSubTitle}>Fllowing</Text>

                        </View>
                    </View>
                    {
                        posts.map((item) => {
                            <PostCard key={item.id} item={item} onDelete={handleDelete} />
                        })
                    }

                </ScrollView>
            </View>
        </SafeAreaView >)
}
export default Profile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    aboutUser: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,

    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn: {
        bordorColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: '#2e64e5',
    },
    userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '95%',
        marginVertical: 20,

    },
    userInforItem: {
        justifyContent: 'center',

    },
    userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    userInfoSubTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },


})