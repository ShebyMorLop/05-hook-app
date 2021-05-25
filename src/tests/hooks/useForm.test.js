import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from "../../hooks/useForm"


describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Sebastian',
        email: 'seb@gmail.com'
    }

    test('Debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm))

        const [formValues, handleInputChange, reset] = result.current

        expect(formValues).toEqual(initialForm)
        expect(typeof handleInputChange).toEqual('function')
        expect(typeof reset).toEqual('function')
    })

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {

        const { result } = renderHook(() => useForm(initialForm))
        const [, handleInputChange] = result.current

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Linda'
                }
            });
        })

        const [formValues] = result.current

        expect(formValues).toEqual({ ...initialForm, name: 'Linda' })

    })

    test('Debe de reestrablecer el formulario con RESET', () => {

        const { result } = renderHook(() => useForm(initialForm))
        const [, handleInputChange, reset] = result.current

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Linda'
                }
            });

            reset();
        })

        const [formValues] = result.current

        expect(formValues).toEqual(initialForm)

    })


})

