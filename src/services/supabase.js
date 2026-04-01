import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://wfcrqynuwpbqfcsbmfbb.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmY3JxeW51d3BicWZjc2JtZmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MTA0MDgsImV4cCI6MjA5MDE4NjQwOH0.EW0ZLzeFG9fhvfGL_LxTO3jmWiCQO_neNsy3ioaSFig"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;