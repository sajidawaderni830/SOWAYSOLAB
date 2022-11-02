import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

import CourseList from '../screens/CourseList'
export default class Home extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../images/Home.jpg')}
                style={{ width: "100%", height: "100%" }}
            >
                <ScrollView>

                    <View style={{
                        width: "100%",
                        alignItems: "flex-end",
                        paddingHorizontal: 20
                    }}>

                    </View>
                    <Text style={{
                        paddingHorizontal: 20,
                        fontSize: 20,
                        paddingTop: 40,
                        fontFamily: "Bold",
                        color: "#297478"
                    }}>
                        VOTRE RESEAU SOCIAL SOLIDAIRE AVEC LE CRYPTO MONNAIE REVOLUTIONNAIRE
                    </Text>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        padding: 10,
                        borderRadius: 12,
                        marginHorizontal: 20,
                        marginTop: 20
                    }}>
                        <TextInput
                            placeholder="Search!"
                            placeholderTextColor="#216063"
                            style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                width: 280,
                                paddingHorizontal: 12
                            }}
                        />
                        <Image
                            source={require('../images/sear.png')}
                            style={{ height: 14, width: 14 }}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        backgroundColor: "#FFF2F2",
                        marginTop: 15,
                        marginHorizontal: 20,
                        borderRadius: 20,
                        paddingVertical: 30,
                        paddingLeft: 30
                    }}>
                        <View>
                            <Text style={{
                                color: "#297478",
                                fontSize: 20,
                                fontFamily: "Bold",
                                width: 250,
                                paddingRight: 100
                            }}>
                                Commencer par vous inscrire et l'activation de votre compte TanitCoin
                            </Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                                style={{
                                    flexDirection: "row",
                                    backgroundColor: "#f58084",
                                    alignItems: "center",
                                    marginTop: 20,
                                    width: 150,
                                    paddingVertical: 10,
                                    borderRadius: 14,
                                    paddingHorizontal: 10
                                }}
                            >
                                <Text style={{
                                    color: "#FFF",
                                    fontFamily: "Bold",
                                    fontSize: 12
                                }}>Commencer</Text>
                                <Image
                                    source={require('../images/a3.png')}
                                    style={{ marginLeft: 20, width: 8, height: 8 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={require('../images/undraw.png')}
                            style={{ marginLeft: -80, marginTop: 35 }}
                        />

                    </View>
                    <Text style={{
                        color: "#345c74",
                        fontFamily: "Bold",
                        fontSize: 20,
                        paddingHorizontal: 20,
                        marginTop: 20,
                        marginBottom: 10
                    }}>Social solidaire pour un monde meilleur</Text>

                    <CourseList
                        img={require('../images/bit.jpg')}
                        title="Sur Sowayso vous recevez jusqu' 100TC/€ pour chaque 100 nouveau amis vous recevez jusqu'a 7000 TC/€ pour chaque
                        100K de nouveau Fans Abonnees sur votre profil et la page professionnel"
                        bg="#60c4be"
                    />
                    <CourseList
                        img={require('../images/amp.jpg')}
                        title=" 'Je passe des dizaines de minutes et des heures sur les réseaux sociaux sans recevoir aucun avantage ' "
                        bg="#fef8e3"
                    />
                    <CourseList
                        img={require('../images/cryp.jpg')}
                        title="Sowayso vous offre jusqu'a 50TC/€ POR chaque 1000 vue sur vos publication soblog"
                        bg="#60c4be"
                    />
                    <CourseList
                        img={require('../images/vec.png')}
                        title=" 'Je suis influenceur et producteur de media digital, je publie mes contenus sur le web et je reçois seulement 900 € pour chaque million de vues ' "
                        bg="#fef8e3"
                    />
                    <CourseList
                        img={require('../images/12.png')}
                        title="Sur Sowayso vous recevez une prime jusqu'a 20 000TC/€ pour chaque million vues sur vos publications somedia,video artistique et clip musical  "
                        bg="#60c4be"
                    />
                    <CourseList
                        img={require('../images/13.png')}
                        title=" 'Je suis un investisseur en crypto monnaies, j’ai perdu beaucoup d’argent à cause de la crise et j’ai observé un grand risque de Ponzi '"
                        bg="#fef8e3"
                    />
                    <CourseList
                        img={require('../images/11.jpg')}
                        title="Tanitcoin vous offres plusieurs plan  d'investissement direct performent ,securise avec des garanties de rentabilite l'achat de Golden Walletvous donne droit a un bonus de 3.19% € par valise d'investissement"
                        bg="#60c4be"
                    />

                </ScrollView>
            </ImageBackground>
        )
    }
}