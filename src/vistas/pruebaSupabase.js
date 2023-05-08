import { createClient } from '@supabase/supabase-js'

export const pruebaSupabase = {
    template: `<h1>Pruebas Supabase</h1>`,
    script: async()=>{
        console.log('purebas supabase');
        const supabaseUrl = 'https://octxdwemqhixufwftyka.supabase.co'
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jdHhkd2VtcWhpeHVmd2Z0eWthIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTIzNjM3MSwiZXhwIjoxOTk2ODEyMzcxfQ.gkfl7qOqksarFohYQ-UjdZq01ZTy4BTdr9EeIeuhzmA'
        const supabase = createClient(supabaseUrl, supabaseKey)
        
        //Consulta a la tabla perfiles
        const verTodosLosPerfiles = async ()=>{
        
            let { data: perfiles, error } = await supabase
            .from('perfiles')
            .select('*')
            return perfiles
            
            
        }
        let datos = await verTodosLosPerfiles(); 
        console.log(datos);
        
        //await agregarPerfil()
        datos = await verTodosLosPerfiles(); 
        console.log(datos)
        const registro = async ()=>{
            //USER SIGNUP
            let { data, error } = await supabase.auth.signUp({
              email: 'pereirahidalgosergio@fpllefia.com',
              password: '123456'
            })
            console.log("Registro")
          }
          //registro()
          const agregarPerfil = async ()=>{
            //INSERT A ROW
            const { data, error } = await supabase
            .from('perfiles')
            .insert([
                { nombre: 'ejemplo'},
            ])
            }
            //await agregarPerfil(registro)
          const login = async ()=>{
            //USER LOGIN
                let { data, error } = await supabase.auth.signInWithPassword({
                email: 'carrebola@fpllefia.com',
                password: '123456'
                })
            }
            
            const logout = async ()=>{
                //USER LOGOUT
                let { error } = await supabase.auth.signOut()
            }
        }
        
        
        
          
}