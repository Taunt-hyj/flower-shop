import React from 'react';
import { View, Text } from 'react-native';

interface Props {
    message?: string;
    description?: string;
}

const ErrorMessage = ({
    message = 'Uh oh! 出错了 :(',
    description = '出错了，请稍后重新尝试.',
}: Props) => {
    return (
        <View>
            <Text>{message}</Text>
            <Text>{description}</Text>
        </View>
    );
};

export default ErrorMessage;
