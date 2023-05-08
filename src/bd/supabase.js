import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'https://octxdwemqhixufwftyka.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jdHhkd2VtcWhpeHVmd2Z0eWthIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTIzNjM3MSwiZXhwIjoxOTk2ODEyMzcxfQ.gkfl7qOqksarFohYQ-UjdZq01ZTy4BTdr9EeIeuhzmA'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
