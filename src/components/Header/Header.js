import {Button, Form, Input, LargeInput, PrincipalDashboard, VeltyDashboard} from './styled'
export default function Header(){
    return (
        <>
            <PrincipalDashboard>principal / dashboard</PrincipalDashboard>
            <VeltyDashboard>velty dashboard</VeltyDashboard>

            <LargeInput>
                <Form>
                    <Button type='submit'></Button>
                    <Input type="text" placeholder="busca"/>
                </Form>
            </LargeInput>
        </>
    )
}