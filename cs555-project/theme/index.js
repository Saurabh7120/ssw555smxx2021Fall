import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const overrides = {
    fonts:{
        heading: "dosis",
        body: "dosis"
    },
    colors: {
        brand:{
            100:'#FDFCFC',
            300:'#88FFF7',
            500:'#7DEDFF',
            700:'#96BAFF',
            900:'#7C83FD'
        }
    },
    components:{
        Select:{
            parts: [],
            // The base styles for each part
            baseStyle: {},
            // The size styles for each part
            sizes: {},
            // The variant styles for each part
            variants: {},
            // The default `size` or `variant` values
            defaultProps: {
                size: 'lg',
                focusBorderColor: 'brand.900'
            }
        }
    }
}

export default extendTheme(overrides, withDefaultColorScheme({ colorScheme: 'brand' }))