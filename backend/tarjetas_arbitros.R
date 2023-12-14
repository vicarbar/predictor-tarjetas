library("tidyr")

#
# # Real 4 tarjetas (2 amarillas por equipo)
# arbitro <- 5.413793103 # Sanchez Martinez
# local <- 24/14 # Madrid
# visitante <- 36/14 # Barsa
# 
# lambda <- (arbitro + local + visitante)/2
# t <- rpois(10000, lambda)
# mean(t)
# # Estimacion 4.8 tarjetas
# 1 - ppois(3.5, lambda)
# # 71% de probabilidades de que haya +3.5 tarjetas

# library(plumber)
# install.packages(c("httr", "jsonlite","dplyr"))
# library(httr)
# library(jsonlite)
# library("dplyr")
# 
# equipos = read.csv("Tarjetas España - Equipos.csv")
# arbitros = read.csv("Tarjetas España - Arbitros.csv")


## functions.R ##
## ----------- ##
#* @get /predict
#* @serializer unboxedJSON
#* @param local 
#* @param visitante 
#* @param arbitro 
createDataModel <- function(local, visitante, arbitro) {
  equipos = read.csv("predictor_tarjetas/football-cards-predictor/data/Tarjetas España - Equipos.csv")
  arbitros = read.csv("predictor_tarjetas/football-cards-predictor/data/Tarjetas España - Arbitros.csv")
  equipos <- equipos %>% drop_na()
  equipos$T.P <- as.double(gsub(",", "\\.", equipos$T.P))
  arbitros$T.P <- as.double(gsub(",", "\\.", arbitros$T.P))
  lambda_local <- equipos$T.P[equipos$Equipo == local]
  lambda_visitante <- equipos$T.P[equipos$Equipo == visitante]
  lambda_arbitro <- arbitros$T.P[arbitros$Árbitro == arbitro]
  lambda <- (lambda_arbitro + lambda_local + lambda_visitante)/2
  p0_5 <- round((1 - ppois(0.5, lambda))*100, 2)
  p1_5 <- round((1 - ppois(1.5, lambda))*100, 2)
  p2_5 <- round((1 - ppois(2.5, lambda))*100, 2)
  p3_5 <- round((1 - ppois(3.5, lambda))*100, 2)
  p4_5 <- round((1 - ppois(4.5, lambda))*100, 2)
  p5_5 <- round((1 - ppois(5.5, lambda))*100, 2)
  p6_5 <- round((1 - ppois(6.5, lambda))*100, 2)
  list('prediccion' = lambda, "p0_5" = p0_5, "p1_5" = p1_5, "p2_5" = p2_5, "p3_5" = p3_5, "p4_5" = p4_5, "p5_5" = p5_5, "p6_5" = p6_5,
       "local" = lambda_local, "visitante" = lambda_visitante, "arbitro" = lambda_arbitro)
}




# # plumber.R
# 
# #* Echo back the input
# #* @param msg The message to echo
# #* @get /echo
# function(msg="") {
#   list(msg = paste0("The message is: '", msg, "'"))
# }
# 
# #* Plot a histogram
# #* @serializer png
# #* @get /plot
# function() {
#   rand <- rnorm(100)
#   hist(rand)
# }
# 
# #* Return the sum of two numbers
# #* @param a The first number to add
# #* @param b The second number to add
# #* @post /sum
# function(a, b) {
#   as.numeric(a) + as.numeric(b)
# }







