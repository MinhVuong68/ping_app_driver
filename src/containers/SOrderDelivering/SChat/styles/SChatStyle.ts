import { Colors } from '@/theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    viewChat: {
        padding:10,
        flex: 1,
        //flexDirection : 'row',
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 0.8,
        borderTopColor: Colors.borderBottom,
    },
    input: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        //marginVertical: 4,
        marginBottom: 5,
    },
    btnSend:{
        marginHorizontal: 10
    }
})

export default styles