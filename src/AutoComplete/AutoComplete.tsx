import { autocomplete } from '@algolia/autocomplete-js'
import { Grid } from '@mui/material'
import React, { createElement, Fragment, useEffect, useRef } from 'react'
import { render } from 'react-dom'

export function Autocomplete(props: any) {
    const containerRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current) {
            return undefined
        }

        const search = autocomplete({
            container: containerRef.current,
            renderer: { createElement, Fragment, render },
            ...props,
        })

        return () => {
            search.destroy()
        }
    }, [props])

    return <Grid ref={containerRef} />
}

export default Autocomplete
