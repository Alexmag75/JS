for(const user of usersList)
    {
        document.write(`

                       <div class="users-box">
                           <div class="user-block">
                              <h2> ID: ${user.id} NAME : ${user.name} <br>USERNAME : ${user.username}</h2>
                              <h3>EMAIL: ${user.email} PHONE: ${user.phone}</h3>
                              <div class="address-block">
                                  <p> City: ${user.address.city}</p>
                                  <p> Street: ${user.address.street}</p>
                                  <p> Suite: ${user.address.suite}</p>
                                  <p>Zip code: ${user.address.zipcode}</p>
                              </div>
                       </div>
                      `)
    }
