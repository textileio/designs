import React, { Fragment } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Input from '../../components/Input'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

import commonStyles from '../commonStyles'
import styles from './statics/styles'

const Step1 = props => {
  const { username, password, onChange, onPreviousStep, history } = props

  return (
    <Fragment>
      <View style={commonStyles.container}>
        <Logo>
          <Text style={styles.headerText}>Now create your account to finish.</Text>
        </Logo>
        <View style={styles.formContainer}>
          <Input
            value={username}
            label="Username"
            onChangeText={value => onChange({ name: 'username', value })}
          />
          <Input
            value={password}
            label="Password"
            secureTextEntry
            onChangeText={value => onChange({ name: 'password', value })}
          />
          <View style={styles.bottomLine}>
            <Text style={styles.bottomLineLink}>By signing up you agree to our <Text style={styles.link}>Terms and Conditions</Text></Text>
            <Button
              text="Create account"
              disabled={!username || !password}
              onPress={() => history.push('/welcome')}
            />
          </View>
        </View>
      </View>
      <Footer>
        <TouchableOpacity onPress={onPreviousStep}>
          <Text style={[styles.footerLink, styles.link, styles.strong]}>Go back</Text>
        </TouchableOpacity>
      </Footer>
    </Fragment>
  )
}

export default Step1