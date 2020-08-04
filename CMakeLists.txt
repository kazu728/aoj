cmake_minimum_required(VERSION 3.8)

set(This AlgorithmTest)

project($'{This} C CXX)

set(CMAKE_C_STANDARD 99)
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

enable_testing()

set(Sources
  src/tree/ExampleTests.cpp
  src/tree/Example.cpp
)
set(Headers
  src/tree/Example.hpp
)

add_subdirectory(googletest)

add_executable(${This} ${Sources})

target_link_libraries(${This} PUBLIC
  gtest_main
) 

add_Test(
  NAME ${This}
  COMMAND ${This}
)
