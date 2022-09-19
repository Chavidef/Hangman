using Newtonsoft.Json;
using System;
using System.Net.Http;

namespace Hangman.Data
{
    public class WordApiRepository
    {
        public  string GetWord()
        {
            using var client = new HttpClient();
            var json = client.GetStringAsync("https://random-word-form.herokuapp.com/random/noun")
                .Result;
            return JsonConvert.DeserializeObject<string>(json);
           
        }
    }
}
