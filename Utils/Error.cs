using System;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace PPR.Utils
{
    public class Error
    {
        public string ErrorMessage { get; set; }

        public static int LogError(Exception ex)
        {
            try
            {
                using (StreamWriter sw = File.AppendText(AppDomain.CurrentDomain.BaseDirectory + "/ErrorLog.txt"))
                {
                    sw.WriteLine("DateTime : " + DateTime.Now + Environment.NewLine);
                    if (ex.Message != null)
                    {
                        sw.WriteLine(Environment.NewLine + "Message" + ex.Message);
                        sw.WriteLine(Environment.NewLine + "StackTrace" + ex.StackTrace);
                    }
                again: if (ex.InnerException != null)
                    {
                        sw.WriteLine(Environment.NewLine + "Inner Exception : " + ex.InnerException.Message);
                    }
                    if (ex.InnerException.InnerException != null)
                    {
                        ex = ex.InnerException;
                        goto again;
                    }

                    sw.WriteLine("------******------");
                }
                return StatusCodes.Status500InternalServerError;
            }
            catch (Exception)
            {
                return StatusCodes.Status500InternalServerError;
            }
        }
    }
}