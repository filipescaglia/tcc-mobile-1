import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import Loading from '../../components/Loading';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Login({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

    useEffect(() => {
		
		async function getToken() {
            
            setLoading(true);

			try {
                const storage = await AsyncStorage.multiGet(['@tcc:token', '@tcc:user']);

				const token = storage[0][1];
				const userStorage = storage[1][1];

				if(!token || !userStorage) return;
                
                navigation.navigate('App');
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
            }
		}

		getToken();

	}, []);
      
    async function handleLogin() {
        setError('');

        if(email === undefined || password === undefined) {
            setError('Preencha todos os campos.');
            return;
        }

        setLoading(true);

        try {
            
            const response = await api.post('/login', {
                email, password
            });

            const { token, user } = response.data;
            
            await AsyncStorage.multiSet([['@tcc:token', token],
                                            ['@tcc:user', JSON.stringify(user)]]);
                    
            navigation.navigate('App');
        } catch (error) {

            const { status } = error.response;

            if(status == 401) {
                setError('E-mail / Senha incorreto.');
            } else {
                setError('Erro ao fazer login.');
            }
        } finally {
            setLoading(false);
        }
    }

    if(loading) {
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <Image source={logo} />

            <Text style={styles.error}>{error}</Text>

            <View style={styles.form}>
                <Text style={styles.formDescription}>Faça seu login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    autoCapitalize = 'none'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
                    <Text style={styles.loginButtonText}> Entrar </Text>
                    <Feather name="log-in" size={22} color="#FFF"/>                          
                </TouchableOpacity>  

            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerButton}>
                <Text>Não possui conta?</Text>
                <Text style={styles.registerTextButton}>Clique aqui</Text>
                <Feather name="arrow-right" size={16} color="#00A8E8"/> 
            </TouchableOpacity>

        </View>
    );
}
