import * as React from 'react';
import { View } from 'react-native';
import { LoginButtonProps } from './types';
import { styles } from './styles';
import Button from './button';
import { useLinkTo } from '@react-navigation/native';

const LoginButton = () => {
  const linkTo = useLinkTo();
  const [buttons] = React.useState<LoginButtonProps[]>([
    {
      image: require('../../../asserts/images/facebook.png'),
      title: 'Continue with Facebook',
      hasBackgroundColor: true
    },
    {
      image: require('../../../asserts/images/google.png'),
      title: 'Continue with Google',
      hasBackgroundColor: true
    },
    {
      image: require('../../../asserts/images/email.png'),
      title: 'Continue with Email',
      hasBackgroundColor: false
    }
  ])
  return (
    <View style={styles.container}>
      {
        buttons.map((button, index) =>
          <Button
            key={index}
            hasBackgroundColor={button.hasBackgroundColor}
            image={button.image}
            title={button.title}
            onPress={() => {
              linkTo('/Home')
            }}
          />
        )
      }
    </View>
  );
};

export default LoginButton;