var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var size = 16;
        var passes = 0;
        var lastmoves = new Array(0);
        var mode = 1;
        lastmoves.push(361);
        var boards = new Array (0);
        var goes = 0;
        var agreementstage = 0;
        var removalboard = new Array(361);
        var passtime = 0;
        function drawgrid ()
        {
          if (mode == 1)
            {
              ctx.fillStyle="rgb(204, 160, 77)";
              //ctx.fillStyle="rgb(144, 100, 41)";
            }
          else
            {
              ctx.fillStyle="rgb(36, 36, 36)";
            }
          ctx.fillRect(0,0,size * 38, size * 38);
          for (var i = 0; i < 19; i++)
          {
            ctx.moveTo(i * size * 2 + size + 0.5, size);
            ctx.lineTo(i * size * 2 + size + 0.5, size * 37);
          }
          for (var i = 0; i < 19; i++)
          {
            ctx.moveTo(size, i * size * 2 + size+ 0.5);
            ctx.lineTo(size * 37, i * size * 2 + size + 0.5);
          }
          // ctx.lineWidth = "2";
          ctx.lineWidth = "1";
          if (mode == 1)
          {
            //ctx.strokeStyle = "rgb(124, 84, 10)";
            ctx.strokeStyle = "black";
          }
          else
          {
            ctx.strokeStyle = "rgb(75, 75, 75)";
          }
          
          ctx.fillStyle = "black";
          ctx.stroke();
          ctx.fill();
          ctx.beginPath();
          ctx.arc(18 * size + size + 0.5,18 * size + size+ 0.5,2,0,2*Math.PI);

          ctx.stroke();
          ctx.fill();
          ctx.beginPath();
          ctx.arc(6 * size + size+ 0.5,6 * size + size+ 0.5,2,0,2*Math.PI);
          ctx.stroke();
          ctx.fill();
          ctx.beginPath();
          ctx.arc(6 * size + size+ 0.5,30 * size + size+ 0.5,2,0,2*Math.PI);
          ctx.stroke();
          ctx.fill();
          ctx.beginPath();
          ctx.arc(30 * size + size+ 0.5,30 * size + size+ 0.5,2,0,2*Math.PI);
          ctx.stroke();
          ctx.fill();
          ctx.beginPath();
          ctx.arc(30 * size + size+ 0.5,6 * size + size+ 0.5,2,0,2*Math.PI);
          ctx.stroke();
          ctx.fill();
          ctx.beginPath();
          ctx.arc(18 * size + size+ 0.5,6 * size + size+ 0.5,2,0,2*Math.PI);
          ctx.stroke();
          ctx.fill();
          ctx.beginPath();
          ctx.arc(6 * size + size+ 0.5,18 * size + size+ 0.5,2,0,2*Math.PI);
          ctx.stroke();
          ctx.fill();
          ctx.beginPath();
          ctx.arc(30 * size + size+ 0.5,18 * size + size+ 0.5,2,0,2*Math.PI);
          ctx.stroke();
          ctx.fill();
          ctx.beginPath();
          ctx.arc(18 * size + size+ 0.5,30 * size + size+ 0.5,2,0,2*Math.PI);
          ctx.stroke();
          ctx.fill();

        }
        function scoregame (board)
        {
          var finalscan = new Array (361);
          for (var i = 0; i < 361; i++)
          {
            finalscan [i] = board [i];
          }
          for (var i = 0; i < 361; i++)
          {
            for (var j = 0; j < 361; j++)
            {
              if (j > 18 && finalscan [j - 19] > 0 && board [j] == 0 && finalscan [j] != finalscan [j - 19])
              {
                if (finalscan [j] > 0)
                {
                  finalscan [j] = 3;
                }
                else
                {
                  finalscan [j] = finalscan [j - 19];
                }
              }
              if (j <352 && finalscan [j + 19] > 0 && board [j] == 0 && finalscan [j] != finalscan [j + 19])
              {
                if (finalscan [j] > 0)
                {
                  finalscan [j] = 3;
                }
                else
                {
                  finalscan [j] = finalscan [j + 19];
                }
              }
              if (j %19 > 0 && finalscan [j - 1] > 0 && board [j] == 0 && finalscan [j] != finalscan [j - 1])
              {
                if (finalscan [j] > 0)
                {
                  finalscan [j] = 3;
                }
                else
                {
                  finalscan [j] = finalscan [j - 1];
                }
              }
              if (j %19 < 18 && finalscan [j + 1] > 0 && board [j] == 0 && finalscan [j] != finalscan [j + 1])
              {
                if (finalscan [j] > 0)
                {
                  finalscan [j] = 3;
                }
                else
                {
                  finalscan [j] = finalscan [j + 1];
                }
              }
            }
          }
          var whitestones = 0;
          var blackstones = 0;
          var whiteterritory = 0;
          var blackterritory = 0;
          for (var i = 0; i < 361; i++)
          {
            if (board[i] == 0 && finalscan [i] == 1)
            {
              whiteterritory++;
            }
            if (board[i] == 0 && finalscan [i] == 2)
            {
              blackterritory++;
            }
            if (board[i] == 1)
            {
              whitestones++;
            }
            if (board[i] == 2)
            {
              blackstones++;
            }
          }
          ctx.globalAlpha = 1;
          for (var x = 0; x < 19; x++)
          {
            for (var y = 0; y < 19; y++)
            {
              
              if (board[x + y * 19] == 0)
              {
                ctx.beginPath();
                ctx.arc(x * size * 2 + size + 0.5,y * size * 2 + size + 0.5,5,0,2*Math.PI);
                ctx.lineWidth = "1.5";
                if (finalscan[x + y * 19] == 2)
                  {
                    ctx.strokeStyle = "black";
                    ctx.stroke();
                    ctx.fillStyle = "black";
                    ctx.fill();
                    ctx.strokeStyle = "black";
                  }
                if (finalscan[x + y * 19] == 1)
                  {
                    ctx.strokeStyle = "white";
                    ctx.stroke();
                    ctx.fillStyle = "white";
                    ctx.fill();
                    ctx.strokeStyle = "white";
                    
                  
                  }
                
              }
            }
          }

          return (blackstones + blackterritory -whitestones - whiteterritory - 7);
        }
        function render (goboard)
        {
          ctx.globalAlpha = 1;
          ctx.lineWidth = "1";
          drawgrid();

          for (var x = 0; x < 19; x++)
          {
            for (var y = 0; y < 19; y++)
            {
              if (goboard[x + y * 19] == 1)
              {
                ctx.beginPath();
                ctx.arc(x * size * 2 + size + 0.5,y * size * 2 + size + 0.5,size - 1,0,2*Math.PI);
                ctx.lineWidth = "1.8";
                ctx.strokeStyle = "black";
                ctx.stroke();
                
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.strokeStyle = "black";
              }
              if (goboard[x + y * 19] == 2)
              {
                ctx.beginPath();
                ctx.arc(x * size * 2 + size + 0.5,y * size * 2 + size + 0.5,size - 3,0,2*Math.PI);
                ctx.lineWidth = "6";
                //  ctx.strokeStyle = "#6ebf00";
                if (mode == 1)
                {
                  ctx.strokeStyle = "black";
                }
                else
                {
                  ctx.strokeStyle = "rgb(156, 239, 0)";
                }
                
                ctx.stroke();
                //ctx.fillStyle = "#63bf00";
                if (mode == 1)
                {
                  ctx.fillStyle = "black";
                }
                else
                {
                  ctx.fillStyle = "rgb(156, 239, 0)";
                }
                ctx.fill();

              }
              if (x + y * 19 == lastmoves[goes])
              {
                ctx.beginPath();
                ctx.arc(x * size * 2 + size + 0.5,y * size * 2 + size + 0.5,5,0,2*Math.PI);
                ctx.lineWidth = "1.5";
                ctx.strokeStyle = "#696969";
                ctx.stroke();
                ctx.fillStyle = "#696969";
                ctx.fill();
                ctx.strokeStyle = "black";
              }
            }
          }
        
        }
        function ghostrender (goboard, original)
        {
          
          ctx.lineWidth = "1";
          drawgrid();

          for (var x = 0; x < 19; x++)
          {
            for (var y = 0; y < 19; y++)
            {
              ctx.globalAlpha = 1;
              if (goboard[x + y * 19] == 1)
              {
                ctx.beginPath();
                ctx.arc(x * size * 2 + size + 0.5,y * size * 2 + size + 0.5,size - 1,0,2*Math.PI);
                ctx.lineWidth = "1.8";
                ctx.strokeStyle = "black";
                ctx.stroke();

                ctx.fillStyle = "white";
                ctx.fill();
                ctx.strokeStyle = "black";
              }
              if (goboard[x + y * 19] == 2)
              {
                ctx.beginPath();
                ctx.arc(x * size * 2 + size + 0.5,y * size * 2 + size + 0.5,size - 1,0,2*Math.PI);
                ctx.lineWidth = "1.8";
                
                if (mode == 1)
                {
                  ctx.strokeStyle = "black";
                }
                else
                {
                  ctx.strokeStyle = "rgb(156, 239, 0)";
                }

                ctx.stroke();
               
                if (mode == 1)
                {
                  ctx.fillStyle = "black";
                }
                else
                {
                  ctx.fillStyle = "rgb(156, 239, 0)";
                }
                ctx.fill();

              }
              if (goboard [x + y * 19] == 0 && original [x + y * 19] > 0)
              {
                ctx.globalAlpha = 0.3;
                if (original[x + y * 19] == 1)
                {
                  ctx.beginPath();
                  ctx.arc(x * size * 2 + size + 0.5,y * size * 2 + size + 0.5,size - 1,0,2*Math.PI);
                  ctx.lineWidth = "1.8";
                  ctx.strokeStyle = "black";
                  ctx.stroke();

                  ctx.fillStyle = "white";
                  ctx.fill();
                  ctx.strokeStyle = "black";
                }
                if (original[x + y * 19] == 2)
                {
                  ctx.beginPath();
                  ctx.arc(x * size * 2 + size + 0.5,y * size * 2 + size + 0.5,size - 1,0,2*Math.PI);
                  ctx.lineWidth = "1.8";
                  
                  if (mode == 1)
                  {
                    ctx.strokeStyle = "black";
                  }
                  else
                  {
                    ctx.strokeStyle = "rgb(156, 239, 0)";
                  }
                  ctx.globalAlpha = 0.3;
                  ctx.stroke();
                  
                  if (mode == 1)
                  {
                    ctx.fillStyle = "black";
                  }
                  else
                  {
                    ctx.fillStyle = "rgb(156, 239, 0)";
                  }
                  ctx.globalAlpha = 0.3;
                  ctx.fill();
              }
              
            }
    
          }
          }
          
        }
        function territoryrender (goboard)
        {
          ctx.globalAlpha = 1;
          ctx.lineWidth = "1";
          drawgrid();

          for (var x = 0; x < 19; x++)
          {
            for (var y = 0; y < 19; y++)
            {
              
              ctx.beginPath();
              ctx.arc(x * size * 2 + size,y * size * 2 + size,size - 3,0,2*Math.PI);
              ctx.lineWidth = "6";
              if (goboard[x + y * 19] > 0)
                {
                  
                  ctx.strokeStyle = "black";
                  ctx.fillStyle = "black";
                  
                }
              if (goboard[x + y * 19] < 0)
                {
                  
                  ctx.strokeStyle = "white";
                  ctx.fillStyle = "white";
        
                }
              if (goboard[x + y * 19]==0)
                {
                  ctx.strokeStyle = "rgb(128, 128, 128)";
                  ctx.fillStyle = "grey";
                }
              ctx.stroke();
              ctx.fill();

              
  
            }
          }
          console.log(goboard);
        }
        
        
        
        var board = new Array (361);
        for (var i = 0; i < 361; i++)
        {
          board [i] = 0;
        }
        boards [0] = new Array();
        for (var i = 0; i < 361; i++)
        {
          boards [0] [i] = board [i];
        }
        render (board);
        
        function getx (x, size)
        {
          return Math.floor ((x - size + 8)/(size * 2));
        }
        function gety (y)
        {
          return Math.floor ((y - 10) / 20);
        }
        function scanboard (board)
        {
          var scan = new Array (361);
          for (var i = 0; i < 361; i++)
          {
            if (board [i] == 0)
            {
              scan [i] = 1;
            }
            else
            {
              scan [i] = 0;
            }
          }
          for (var i = 0; i < 180; i++)
          {
            for (var j = 0; j < 361; j++)
            {
              if (scan [j] == 0)
              {
                if (j > 18 && scan [j - 19] == 1 && (board [j] == board [j - 19]||board [j - 19] == 0))
                {
                  scan [j] = 1;
                }
                if (j < 352 && scan [j + 19] == 1 && (board [j] == board [j + 19]||board [j + 19] == 0))
                {
                  scan [j] = 1;
                }
                if (j % 19 > 0 && scan [j - 1] == 1 && (board [j] == board [j - 1]||board [j - 1] == 0))
                {
                  scan [j] = 1;
                }
                if (j % 19 < 18 && scan [j + 1] == 1 && (board [j] == board [j + 1]||board [j + 1] == 0))
                {
                  scan [j] = 1;
                }
              }
            }
          }
          return scan;
        }
        function makemove (board, x, y, move)
        {

          board [x + y * 19] = move;
          var scan = scanboard (board);
          for (var i = 0; i < 361; i++)
          {
            if (scan [i] == 0 && board [i] != move)
            {
              board [i] = 0;
            }
          }
          scan = scanboard (board);
          for (var i = 0; i < 361; i++)
          {
            if (scan [i] == 0 && board [i] == move)
            {
              board [i] = 0;
            }
          }
          return board;
        }
        function islegal (board, x, y, move)
        {
          if (board [x + y * 19] > 0/* || x > 18 || y > 18*/)
          {
            return false;
          }
          else
          {
            return true;
          }
        }

        myCanvas.addEventListener("click", function ()
                                  {

          if (agreementstage == 0 || agreementstage == 2)
            {
              var x = event.clientX;    
              var y = event.clientY; 
              

              if (islegal (board, getx (x, size), getx (y, size), goes % 2 + 1))
              {
                goes++;
                board = makemove (board, getx (x, size), getx (y, size), goes % 2 + 1);
                var check;
                var totalcheck = 0;
                for (var i = 0; i < goes; i++)
                  {
                    check = 1;
                    for (var j = 0; j < 361; j++)
                      {
                        if (boards[i][j]!= board[j])
                          {
                            check = 0;
                          }
                      }
                    if (check == 1)
                      {
                        console.log("index: ", i);
                        totalcheck = 1;
                      }
                  }
                if (totalcheck == 1 && goes > 1)
                  {
                    console.log("ko");

                    for (var i = 0; i < 361; i++)
                      {
                        board [i] = boards [goes - 1] [i];
                      }
                    goes--;
                  }
                else
                  {

                    lastmoves[goes] = getx (x, size) + getx (y, size) * 19;
                    passes = 0;
                    while (boards.length > goes)
                      {
                        boards.pop();
                      }
                    boards [goes] = new Array();
                    for (var i = 0; i < 361; i++)
                    {
                      boards [goes] [i] = board [i];
                    }

                    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                    render (board);
                    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                    render (board);
                    console.log("board:");
                    for (var i = 0; i < 1; i++)
                    {
                      console.log(board.slice(i * 19, i * 19 + 19));
                    }
                    console.log("boardsss length: ", boards.length);
                    console.log("boardssss:");
                    for (var i = 0; i < boards.length; i++)
                    {
                      console.log(boards[i].slice(0,18));

                    }
                  }
              }
            }
          else
            {
              if (agreementstage == 1)
                {
                  var x = getx(event.clientX, size);    
                  var y = getx(event.clientY, size); 
                  if (removalboard [x + y * 19] > 0)
                    {
                      removalboard[ x + y * 19] = 0;
                    }
                  else
                    {
                      removalboard[x + y * 19] = board [x + y * 19];
                    }
                  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                  ghostrender (removalboard,  board);
                  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                  ghostrender (removalboard, board);
                  scoregame(removalboard);
                  console.log("removalboard:");
                  for (var i = 0; i < 1; i++)
                  {
                    console.log(removalboard.slice(i * 19, i * 19 + 19));
                  }
                  console.log("board:");
                  for (var i = 0; i < 1; i++)
                  {
                    console.log(board.slice(i * 19, i * 19 + 19));
                  }
                  
                }
            }
        }
                                  ,true);


        function undo ()
        {
          
            if (goes > 0)
            {
              goes--;
              if (passes > 0)
                {
                  passes --;
                }
              for (var i = 0; i < 361; i++)
              {
                board [i] = boards [goes] [i];
              }

               ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
              render (board);
              ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
              render (board);
              console.log("board:");
              for (var i = 0; i < 1; i++)
              {
                console.log(board.slice(i * 19, i * 19 + 19));
              }
              console.log("boardsss length: ", boards.length);
              console.log("boardssss:");
              for (var i = 0; i < boards.length; i++)
              {
                console.log(boards[i].slice(0,18));

              }
              console.log("Goes:", goes);
            }

        }
        function redo()
        {
          if (boards.length > goes + 1)
            {
              goes++;
              for (var i = 0; i < 361; i++)
              {
                board [i] = boards [goes] [i];
              }
              
              ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
              render (board);
              ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
              render (board);
              console.log("board:");
              for (var i = 0; i < 1; i++)
              {
                console.log(board.slice(i * 19, i * 19 + 19));
              }
              console.log("boardsss length: ", boards.length);
              console.log("boardssss:");
              for (var i = 0; i < boards.length; i++)
              {
                console.log(boards[i].slice(0,18));

              }
              console.log("Goes:", goes);
            }
        }
        function pass ()
        {
          if (agreementstage != 1)
            {
              if (passes > 0)
              {
                goes ++;
				while (boards.length > goes)
				{
					boards.pop();
				}

				
                boards [goes] = new Array();
                for (var i = 0; i < 361; i++)
                {
                  boards [goes] [i] = board [i];
                }
                passes = 1;
                lastmoves[goes] = 361;
                if (agreementstage == 2)
                {
                  var pointdifference = scoregame(board);
                  if (pointdifference > 0)
                  {
                    document.getElementById("comments").innerHTML = "black wins";
                  }
                  if (pointdifference < 0)
                  {
                    document.getElementById("comments").innerHTML = "white wins";

                  }
                  passes = 2;
                  agreementstage = 3;
                }
                if (agreementstage == 0)
                {
                  console.log("click on stones to remove them");
                  document.getElementById("comments").innerHTML = "click on stones to remove them";
                  var hidepassbutton = document.getElementById("passbutton");
                  hidepassbutton.style.display = "none";
                  var buttons = document.getElementById ("agreedisagree");
                  buttons.style.display = "block";
                  passtime = goes;
                  for (var i = 0; i < 361; i++)
                  {
                    removalboard [i] = board [i];

                  }
                  scoregame(board);
                  agreementstage = 1;
                }


              }
              else
              {
                goes ++;
                boards [goes] = new Array();
                for (var i = 0; i < 361; i++)
                {
                  boards [boards.length - 1] [i] = board [i];
                }
                passes = 1;
                lastmoves[goes] = 361;
                ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                render (board);
                ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                render (board);
              }
            }
          
          


        }
        function agreed ()
        {
			if (agreementstage == 1)
			{
			  agreementstage = 3;
			  for (var i = 0; i < 361; i++)
				{
				  board[i] = removalboard [i];
				}
			  boards [boards.length] = new Array (361);
			  for (var i = 0; i < 361; i++)
			  {
				  boards [boards.length][i] = board[i];
			  }
		      for (var i = 0; i < 361; i++)
			  {
				  boards [boards.length][i] = board[i];
			  }
			  goes +=2;
			  passtime = goes;


			  var pointdifference = scoregame(board);
			  if (pointdifference > 0)
			  {
				document.getElementById("comments").innerHTML = "<br>black wins";
			  }
			  if (pointdifference < 0)
			  {
				document.getElementById("comments").innerHTML = "<br>white wins";

			  }
			  passes = 2;
			  var buttons = document.getElementById("agreedisagree");
			  buttons.style.display = "none";
            }
        }
        function disagreed()
        {
          if (agreementstage == 1)
            {
              agreementstage = 2;
              passes = 0;
              ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
              render (board);
              ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
              render (board);
              document.getElementById("comments").innerHTML = "play on";
              var buttons = document.getElementById("agreedisagree");
              buttons.style.display = "none";
              var hidepassbutton = document.getElementById("passbutton");
              hidepassbutton.style.display = "block";
            }
        }
        function montecarlo ()
        {
          var mcboard = new Array (361);
          var territorycount = new Array (361);
          var mcgoes;
          var x;
          var y;
          for (var i = 0; i < 361; i++)
            {
              territorycount [i] = 0;
            }
          for (var j = 0; j < 10; j++)
            {
              for (var i = 0; i < 361; i++)
                {
                  mcboard [i] = board [i];
                }
              mcgoes = goes;
              while (mcgoes < 200)
                {
                  x = Math.floor(Math.random() * 19);
                  y = Math.floor(Math.random() * 19);

                  if (islegal (mcboard, x, y, mcgoes % 2 + 1))
                  {
                    mcgoes++;

                    //console.log(lastmove);


                    mcboard = makemove (mcboard,x,y, mcgoes % 2 + 1);


                    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                    render (mcboard);
                    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                    render (mcboard);
                    //for (var k = 0; k < 100000000; k++)
                      //{}
                    console.log("done");
                    

                    //console.log("last move: ", lastmove);
                  }
                }
              for (var i = 0; i < 361; i++)
              {
                if (mcboard[i]==2)
                {
                  territorycount[i]++;
                }
                if (mcboard[i]==1)
                {
                  territorycount[i]--;
                }

              }
            }
          territoryrender(territorycount);
        }
        myCanvas.addEventListener('mousemove', function()
                                  {
          if (agreementstage == 0 || agreementstage == 2)
            {
              var buttons = document.getElementById ("agreedisagree");
              buttons.style.display = "none";
              if (passes < 2)
                {
                  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                  render (board);
                  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                  render (board);
                  var x = event.clientX;    
                  var y = event.clientY; 
                  x = getx(x,size);
                  y = getx(y,size);
                  if (islegal(board, x, y))
                  {

                    ctx.lineWidth = "1.8";
                    ctx.lineStyle = "black";
                    ctx.beginPath();
                    ctx.arc(x * size * 2 + size + 0.5 ,y * size * 2 + size + 0.5,size - 1,0,2*Math.PI);

                    ctx.globalAlpha=0.4;
                    if (goes % 2 == 0)
                    {
                      ctx.strokeStyle = "rgb(0, 0, 0)";
                      ctx.fillStyle = "rgb(0, 0, 0)";
                    }
                    else
                    {
                      ctx.strokeStyle = "black";
                      ctx.fillStyle = "white";
                    }

                    ctx.stroke();
                    ctx.fill();
                  }
                }
            }

        });
        myCanvas.addEventListener('mouseout', function()
                                  {
          if (passes < 2 && (agreementstage == 0|| agreementstage == 2))
            {
              ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
              render (board);
              ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
              render (board);
            }
          


        });
